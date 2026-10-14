//引入
import { reactive } from "vue";
import { Platform } from "../types";
import service from "../api/service";

//App数据结构
export interface AppState {
  //服务数据
  server: service; //服务
  com_api_url: string; //公共API地址
  base_api_url: string; //基础API地址

  //运行环境
  deviceid: string; //设备ID
  app_name: string; //App名称
  platform: Platform; //运行平台

  //界面数据
  title: string; //标题
  width: number; //显示宽度
  height: number; //显示高度
  show_width: number; //显示宽度
  show_loading: boolean; //显示加载界面

  //提示界面
  tips_icon: string; //提示图标
  show_tips: boolean; //显示提示
  tips_detail: string; //提示内容
  show_tips_dialog: boolean; //显示提示对话框
  tips_dialog_title: string; //提示对话框标题
  tips_dialog_detail: string; //提示对话框内容
  tips_dialog_callback: Function; //提示对话框回掉函数
  tips_dialog_show_cancel: boolean; //提示对话框显示取消
}

//初始化数据
const appState: AppState = reactive({
  //服务数据
  server: null as any, //服务
  com_api_url: "", //公共API地址
  base_api_url: "", //基础API地址

  //运行环境
  deviceid: "", //设备ID
  app_name: "", //App名称
  platform: Platform.NULL, //运行平台

  //界面数据
  title: "", //标题
  width: 0, //显示宽度
  height: 0, //显示高度
  show_width: 0, //显示宽度ss
  show_loading: false, //显示加载界面

  //提示界面
  tips_icon: "", //提示图标
  tips_detail: "", //提示内容
  show_tips: false, //显示提示
  tips_dialog_title: "", //提示对话框标题
  tips_dialog_detail: "", //提示对话框内容
  show_tips_dialog: false, //显示提示对话框
  tips_dialog_callback: null as any, //提示对话框回掉函数
  tips_dialog_show_cancel: false, //提示对话框显示取消
});

//使用数据
export default function useAppStore() {
  //-------------------------- 服务数据 --------------------------

  //修改App名称
  const CHANGE_APP_NAME = (name: string) => {
    //数据赋值
    appState.app_name = name;
  };

  //修改服务
  const CHANGE_SERVER = (server: service) => {
    //数据赋值
    appState.server = server;
  };

  //修改公共API地址
  const CHANGE_COM_API_URL = (url: string) => {
    //数据赋值
    appState.com_api_url = url;
  };

  //修改基础API地址
  const CHANGE_BASE_API_URL = (url: string) => {
    //数据赋值
    appState.base_api_url = url;
  };

  //-------------------------- 运行环境 --------------------------
  //修改运行平台
  const INIT_PLATFORM = () => {
    //获取操作系统信息
    const ua = navigator.userAgent;

    //判断赋值
    if (/Windows NT/i.test(ua)) {
      appState.platform = Platform.Windows;
    } else if (/iPhone|iPad|iPod/i.test(ua)) {
      appState.platform = Platform.IOS;
    } else if (/Mac OS X/i.test(ua)) {
      appState.platform = Platform.MacOS;
    } else if (/Android/i.test(ua)) {
      appState.platform = Platform.Android;
    } else if (/Linux/i.test(ua)) {
      appState.platform = Platform.Linux;
    } else {
      appState.platform = Platform.NULL;
    }
  };

  //初始化设备ID
  const INIT_DEVICEID = (deviceid: string) => {
    appState.deviceid = deviceid;
  };

  //-------------------------- 界面数据 --------------------------
  //修改标题
  const CHANGE_TITLE = (title: string) => {
    //数据赋值
    appState.title = title;

    //标题
    document.title = appState.app_name + "-" + title;
  };

  //修改尺寸
  const CHANGE_SIZE = (width: number, height: number) => {
    //数据赋值
    appState.width = width;
    appState.height = height;
    appState.show_width = Math.min(width, height * 0.7);
  };

  //修改显示加载
  const CHANGE_SHOW_LOADING = (show: boolean, isTimeOut: boolean = true) => {
    //显示加载
    if (show) {
      appState.show_loading = show;
    }
    //隐藏加载
    else {
      if (isTimeOut) {
        //延迟隐藏
        setTimeout(() => {
          appState.show_loading = show;
        }, 500);
      } else {
        appState.show_loading = show;
      }
    }
  };

  //-------------------------- 提示界面 --------------------------
  //隐藏提示对话框
  const HIDE_TIPS_DIALOG = () => {
    //清空数据
    appState.show_tips_dialog = false;
    appState.tips_dialog_callback = null as any;
  };

  //显示提示
  const SHOW_TIPS = (detail: string, icon: string = "", time: number = 2000) => {
    //显示界面
    appState.show_tips = true;
    appState.tips_icon = icon;
    appState.tips_detail = detail;

    //等待隐藏
    setTimeout(() => {
      //显示界面
      appState.show_tips = false;
    }, time);
  };

  //显示提示对话框
  const SHOW_TIPS_DIALOG = (title: string, detail: string, callback: Function = null as any, cancel: boolean = false) => {
    //数据赋值
    appState.show_tips_dialog = true;
    appState.tips_dialog_title = title;
    appState.tips_dialog_detail = detail;
    appState.tips_dialog_show_cancel = cancel;
    appState.tips_dialog_callback = callback as any;
  };

  //返回
  return {
    appState,
    SHOW_TIPS,
    CHANGE_SIZE,
    CHANGE_TITLE,
    INIT_PLATFORM,
    CHANGE_SERVER,
    INIT_DEVICEID,
    CHANGE_APP_NAME,
    HIDE_TIPS_DIALOG,
    SHOW_TIPS_DIALOG,
    CHANGE_COM_API_URL,
    CHANGE_BASE_API_URL,
    CHANGE_SHOW_LOADING,
  };
}
