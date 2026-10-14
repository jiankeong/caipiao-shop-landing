<template>
  <div class="container">
    <!-- 提示界面 -->
    <Tips />

    <!-- 提示界面 -->
    <TipsDialog />

    <!-- 加载界面 -->
    <Loading v-if="appState.show_loading" class="loading-container" :style="{ width: appState.show_width + 'px' }" />

    <!-- 路由内容 -->
    <div class="app-wrapper">
      <!-- 内容 -->
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<!-- 函数 -->
<script setup lang="ts">
import useAppStore from "../store/app";
import Tips from "../view/comp/Tips.vue";
import Loading from "../view/comp/Loading.vue";
import TipsDialog from "../view/comp/TipsDialog.vue";

//数据赋值
const { appState } = useAppStore();
</script>

<!-- 样式 -->
<style scoped>
/* 容器 */
.container {
  width: 100%;
  height: 100%;
}

/* App路由容器 */
.app-wrapper {
  width: 100%;
  display: flex;
  position: relative;
}

/* 加载容器 */
.loading-container {
  height: 100%;
  z-index: 1000;
  position: absolute;
  background: #00000090;
}
</style>
