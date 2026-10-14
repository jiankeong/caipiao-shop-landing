<!-- 提示界面 -->
<template>
  <van-popup :overlay="false" v-model:show="appState.show_tips" :close-on-click-overlay="false" :style="{ width: appState.show_width * 0.75 + 'px', borderRadius: appState.show_width * 0.02 + 'px', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#00000000' }">
    <div :style="{ minWidth: appState.show_width * 0.3 + 'px', borderRadius: appState.show_width * 0.01 + 'px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#00000080' }">
      <!-- 图标 -->
      <van-icon v-if="appState.tips_icon != ''" :name="appState.tips_icon" color="#ffffff" :size="Math.floor(appState.show_width * 0.1)" :style="{ marginTop: appState.show_width * 0.03 + 'px' }" />

      <!-- 文本 -->
      <div :style="{ fontSize: appState.show_width * 0.04 + 'px', margin: appState.show_width * 0.02 + 'px', color: '#ffffff', textAlign: 'center' }">{{ appState.tips_detail }}</div>
    </div>
  </van-popup>
</template>

<!-- 函数 -->
<script setup lang="ts">
import useAppStore from "../../store/app";

//数据赋值
const { appState } = useAppStore();
</script>

<!-- 样式 -->
<style scoped>
.no-leave-animation {
  transition: none !important;
}
</style>
