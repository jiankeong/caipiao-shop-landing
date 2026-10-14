import { Popup } from "vant";
import { createApp } from "vue";

//本地导入
import App from "./App.vue";
import router from "./router";
import service from "./api/service";
import useAppStore from "./store/app";
import { getCookies, saveCookies } from "./utils";

/**
 * App启动
 */
class Main {
  //初始化
  constructor() {
    //初始化
    this.init();
  }

  //初始化流程
  private async init() {
    //获取配置数据
    await this.getConfigData();

    //获取本地数据
    await this.getLocalData();

    //初始化服务
    this.initServer();

    //开始
    this.start();
  }

  //开始
  private start(): void {
    //初始化
    const app = createApp(App);
    app.use(Popup);

    //使用路由
    app.use(router);

    //显示界面
    app.mount("#app");
  }

  //初始化服务
  private async initServer() {
    //获取数据
    const { appState, CHANGE_SERVER } = useAppStore();

    //初始化服务
    var server: service = new service(appState.base_api_url);
    CHANGE_SERVER(server);
  }

  //获取本地数据
  private async getLocalData() {
    //数据赋值
    const { INIT_DEVICEID } = useAppStore();

    //设备ID
    var deviceid: string = getCookies("deviceid");
    if (!deviceid || deviceid == "") deviceid = String(new Date().getTime()) + String(Math.floor(Math.random() * 10000000));
    saveCookies("deviceid", deviceid);
    INIT_DEVICEID(deviceid);
  }

  //获取配置数据
  private async getConfigData() {
    //初始化平台
    const { INIT_PLATFORM, CHANGE_COM_API_URL, CHANGE_BASE_API_URL, CHANGE_APP_NAME } = useAppStore();

    //修改API列表
    CHANGE_COM_API_URL((window as any)["caipiao_cfg"]["COM_API"]);
    CHANGE_BASE_API_URL((window as any)["caipiao_cfg"]["BASE_API"]);

    //修改App名称
    CHANGE_APP_NAME((window as any)["caipiao_cfg"]["APP_NAME"]);

    //初始化平台
    INIT_PLATFORM();
  }
}

//初始化
new Main();
