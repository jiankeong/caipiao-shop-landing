<!-- 微信提示 -->
<template>
  <div class="container" :style="{ height: appState.height + 'px', background: '#00000090' }">
    <img src="/img/tips.png" :style="{ width: appState.show_width * 0.88 + 'px', marginTop: appState.show_width * 0.02 + 'px', marginLeft: appState.show_width * 0.08 + 'px' }" />
  </div>
</template>

<!-- 函数 -->
<script setup lang="ts">
import useAppStore from "../../store/app";

//数据赋值
const { appState } = useAppStore();
</script>

<!-- 样式 -->
<style scoped>
/* 容器 */
.container {
  width: 100%;
  height: 100%;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
}
</style>
