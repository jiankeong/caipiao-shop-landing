<!-- 主界面 -->
<template>
  <div id="app" class="container" :style="{ width: appState.show_width + 'px', marginLeft: Math.max(0, (appState.width - appState.show_width) / 2) + 'px' }">
    <!-- 路由 -->
    <router-view />
  </div>
</template>

<!-- 函数 -->
<script setup lang="ts">
import useAppStore from "./store/app";
import { onMounted, onBeforeUnmount } from "vue";

//数据赋值
const { appState, CHANGE_SIZE } = useAppStore();
CHANGE_SIZE(window.innerWidth, window.innerHeight);

//清理事件监听器
onBeforeUnmount(() => {
  //注销事件
  window.removeEventListener("resize", updateDimensions);
});

//初始化获取主页数据
onMounted(async () => {
  //注册事件
  window.addEventListener("resize", updateDimensions);
});

//更新屏幕尺寸的函数
const updateDimensions = () => {
  //修改尺寸
  CHANGE_SIZE(window.innerWidth, window.innerHeight);
};
</script>

<!-- 样式 -->
<style>
/* 主体 */
html,
body {
  width: 100%;
  height: 100%;
  font-size: 16px;
  overflow: hidden;
  touch-action: manipulation;
  -ms-touch-action: manipulation;
  -webkit-font-smoothing: antialiased;
}

/* App */
#app {
  height: 100%;
  overflow: hidden;
  background: #f2f5fa;
  flex-direction: column;
}

/* 隐藏滑动条 */
::-webkit-scrollbar {
  display: none !important;
}
</style>
