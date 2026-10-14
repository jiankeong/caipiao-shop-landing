import useAppStore from "../../store/app";

//数据赋值
const { appState } = useAppStore();

//App基础信息
export const appInfo = () =>
  appState.server.service({
    method: "post",
    url: "/api/shop/appInfo",
  });

//注册账号
export const register = (data: any) =>
  appState.server.service({
    data: data,
    method: "post",
    url: "/api/shop/register",
  });
