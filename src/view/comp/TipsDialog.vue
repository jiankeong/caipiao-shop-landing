<!-- 提示对话框界面 -->
<template>
  <van-popup v-model:show="appState.show_tips_dialog" :close-on-click-overlay="false" :style="{ width: appState.show_width * 0.6 + 'px', borderRadius: appState.show_width * 0.02 + 'px', display: 'flex', flexDirection: 'column', alignItems: 'center' }">
    <!-- 标题 -->
    <div :style="{ height: appState.show_width * 0.06 + 'px', fontSize: appState.show_width * 0.04 + 'px', marginTop: appState.show_width * 0.04 + 'px', fontWeight: 'bold' }">{{ appState.tips_dialog_title }}</div>

    <!-- 内容 -->
    <div :style="{ width: appState.show_width * 0.5 + 'px', height: appState.show_width * 0.1 + 'px', marginTop: appState.show_width * 0.04 + 'px', display: 'flex', alignItems: 'center', justifyContent: 'center' }">
      <div :style="{ width: appState.show_width * 0.5 + 'px', fontSize: appState.show_width * 0.03 + 'px', color: '#666666', textAlign: 'center' }">{{ appState.tips_dialog_detail }}</div>
    </div>

    <!-- 按钮 -->
    <div :style="{ width: appState.show_width * 0.6 + 'px', marginTop: appState.show_width * 0.04 + 'px', height: 1 + 'px', background: '#dddddd' }"></div>
    <div :style="{ width: appState.show_width * 0.6 + 'px', display: 'flex', flexDirection: 'row' }">
      <div v-if="appState.tips_dialog_show_cancel" :style="{ width: appState.show_width * 0.3 + 'px', height: appState.show_width * 0.12 + 'px', fontSize: appState.show_width * 0.035 + 'px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#777777' }" @click="onCancel">取消</div>
      <div v-if="appState.tips_dialog_show_cancel" :style="{ width: 1 + 'px', height: appState.show_width * 0.12 + 'px', background: '#dddddd' }"></div>
      <div :style="{ width: (appState.tips_dialog_show_cancel ? appState.show_width * 0.3 : appState.show_width * 0.6) + 'px', height: appState.show_width * 0.12 + 'px', fontSize: appState.show_width * 0.035 + 'px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#478df7' }" @click="onYes">确认</div>
    </div>
  </van-popup>
</template>

<!-- 函数 -->
<script setup lang="ts">
import useAppStore from "../../store/app";

//数据赋值
const { appState, HIDE_TIPS_DIALOG } = useAppStore();

//确定函数
const onYes = () => {
  //回掉函数
  if (appState.tips_dialog_callback) appState.tips_dialog_callback();

  //隐藏界面
  HIDE_TIPS_DIALOG();
};

//取消按钮
const onCancel = () => {
  //隐藏界面
  HIDE_TIPS_DIALOG();
};
</script>
