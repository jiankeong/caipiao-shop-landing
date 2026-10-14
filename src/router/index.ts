import useAppStore from "../store/app";
import Layout from "../layout/index.vue";
import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

//预加载所有视图组件，确保它们被正确打包
const WechatView = () => import("../view/wechat/wechat.vue");
const RegisterView = () => import("../view/register/register.vue");

//路由
const routes: Array<RouteRecordRaw> = [
  //主界面
  {
    //基础地址
    path: "/",
    name: "root",
    component: Layout,
    redirect: { name: "register" },

    //子页面
    children: [
      //注册
      {
        name: "register",
        path: "/register",
        component: RegisterView,
        meta: {
          title: "注册",
        },
      },

      //微信提示
      {
        name: "wechat",
        path: "/wechat",
        component: WechatView,
        meta: {
          title: "微信提示",
        },
      },
    ],
  },
];

//路由数据
const router = createRouter({
  history: createWebHistory(),
  routes,
});

//路由切换前
router.beforeEach((to, from, next) => {
  //数据赋值
  const title = to?.meta?.title;
  const { CHANGE_TITLE } = useAppStore();

  //注册、下载
  if (to.path == "/register" || to.path == "/download") {
    //微信环境
    if (isWeChatEnv()) {
      //获取参数
      var param: string = document.location.href.indexOf("?") >= 0 ? "?" + document.location.href.split("?")[1] : "";

      //显示微信提示
      router.replace("/wechat" + param);

      //返回
      return;
    }
  }
  //其他
  else {
    //非微信环境
    if (!isWeChatEnv()) {
      //获取参数
      var param: string = document.location.href.indexOf("?") >= 0 ? "?" + document.location.href.split("?")[1] : "";

      //显示微信提示
      router.replace("/register" + param);

      //返回
      return;
    }
  }

  //显示标题
  if (title) CHANGE_TITLE(title as string);

  //界面跳转
  next();
});

//是否微信环境
const isWeChatEnv = () => {
  return /micromessenger/i.test(window.navigator.userAgent);
};

//导出
export default router;
