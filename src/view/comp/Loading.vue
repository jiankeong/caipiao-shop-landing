<!-- 加载界面 -->
<template>
  <div class="container">
    <div class="detail-container" :style="{ width: appState.show_width + 'px', height: appState.show_width + 'px' }">
      <div :style="{ width: appState.show_width * 0.3 + 'px', height: appState.show_width * 0.3 + 'px', borderRadius: appState.show_width * 0.04 + 'px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#00000080' }">
        <!-- Logo -->
        <van-loading type="spinner" :size="Math.floor(appState.show_width * 0.08)" />

        <!-- 文本 -->
        <div :style="{ fontSize: appState.show_width * 0.035 + 'px', marginTop: appState.show_width * 0.03 + 'px', color: '#ffffff' }">加载中...</div>
      </div>
    </div>
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
  align-items: center;
  justify-content: center;
}

/* 内容容器 */
.detail-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: #ffffff00;
}
</style>
