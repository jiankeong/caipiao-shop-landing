import { ObjectEx } from "../utils";
import useAppStore from "../store/app";
import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

//Http服务
export default class service {
  //定义变量
  private _service: AxiosInstance;

  /**
   * 初始化
   */
  constructor(url: string) {
    //数据赋值
    const { SHOW_TIPS, SHOW_TIPS_DIALOG, CHANGE_SHOW_LOADING } = useAppStore();

    //初始化服务
    this._service = axios.create({
      baseURL: url,
      timeout: 60000,
    });

    //请求拦截器
    this._service.interceptors.request.use(
      //接口请求
      (config) => {
        //添加消息头
        const headers = this.getHeaders();
        config.headers = ObjectEx.merge(config.headers, headers);

        //地址加时间戳
        config.url += (String(config.url).indexOf("?") != -1 ? "&" : "?") + "t=" + new Date().getTime();

        //返回配置
        return config;
      },
      (error: AxiosError) => {
        Promise.reject(error);
      }
    );

    //响应拦截器
    this._service.interceptors.response.use(
      //接口回调
      (response: AxiosResponse) => {
        //返回成功
        if (response.data.status == 0) {
          //返回结果
          return response.data.data;
        }
        //返回失败
        else {
          //隐藏加载
          CHANGE_SHOW_LOADING(false);

          //显示提示
          SHOW_TIPS_DIALOG("提示", response.data.msg);

          //返回错误
          return Promise.reject(response.data.errorCode);
        }
      },
      (error: AxiosError) => {
        //显示错误提示
        console.log(error.message);

        //显示提示
        SHOW_TIPS(error.message);

        //隐藏加载
        CHANGE_SHOW_LOADING(false);

        //返回错误
        return Promise.reject(error);
      }
    );
  }

  /**
   * 服务数据
   */
  public get service(): AxiosInstance {
    return this._service;
  }

  //-------------------- 本地数据 --------------------
  //消息头
  private getHeaders(): any {
    //定义变量
    const headers: any = {};

    //返回消息头
    return headers;
  }
}
