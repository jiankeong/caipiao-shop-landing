<!-- 注册 -->
<template>
  <div class="container" :style="{ height: appState.height + 'px', background: '#6322e8' }">
    <div :style="{ width: appState.show_width + 'px', position: 'relative' }">
      <!-- 背景 -->
      <div :style="{ width: appState.show_width + 'px', marginBottom: -appState.show_width * 0.02 + 'px' }">
        <img src="/img/back.png" :style="{ width: appState.show_width + 'px' }" />
      </div>

      <!-- 返回按钮 -->
      <div
        :style="{
          display: 'flex',
          position: 'fixed',
          alignItems: 'center',
          background: '#00000090',
          justifyContent: 'center',
          top: appState.show_width * 0.03 + 'px',
          width: appState.show_width * 0.1 + 'px',
          height: appState.show_width * 0.1 + 'px',
          borderRadius: appState.show_width * 0.06 + 'px',
          left: Math.max(0, (appState.width - appState.show_width) / 2) + appState.show_width * 0.03 + 'px',
        }"
        @click="onBack"
        v-if="show_type == 1"
      >
        <van-icon name="arrow-left" style="color: #ffffff" :size="Math.floor(appState.show_width * 0.05)" />
      </div>

      <!-- 内容 -->
      <div :style="{ width: appState.show_width + 'px', position: 'absolute', top: appState.show_width * 1.08 + 'px', display: 'flex', flexDirection: 'column', alignItems: 'center' }">
        <!------------------------------------- 注册界面 ------------------------------------->
        <!-- 注册界面 -->
        <div v-if="show_type == 0" :style="{ width: appState.show_width * 0.8 + 'px', marginRight: appState.show_width * 0.01 + 'px', display: 'flex', flexDirection: 'column', alignItems: 'center' }">
          <!-- 手机号 -->
          <div :style="{ width: appState.show_width * 0.72 + 'px', height: appState.show_width * 0.085 + 'px', borderRadius: appState.show_width * 0.02 + 'px', marginTop: appState.show_width * 0.02 + 'px', display: 'flex', flexDirection: 'row', alignItems: 'center', background: '#ae6af4' }">
            <!-- 标题 -->
            <div :style="{ fontSize: appState.show_width * 0.035 + 'px', width: appState.show_width * 0.18 + 'px', textAlign: 'right', color: '#ffffff', fontWeight: 'bold' }">手机号</div>

            <!-- 文本 -->
            <van-field v-model="phone" placeholder="请输入手机号" :style="{ fontSize: appState.show_width * 0.035 + 'px', background: '#00000000', width: appState.show_width * 0.52 + 'px' }" />
          </div>

          <!-- 密码 -->
          <div :style="{ width: appState.show_width * 0.72 + 'px', height: appState.show_width * 0.085 + 'px', borderRadius: appState.show_width * 0.02 + 'px', marginTop: appState.show_width * 0.01 + 'px', display: 'flex', flexDirection: 'row', alignItems: 'center', background: '#ae6af4' }">
            <!-- 标题 -->
            <div :style="{ fontSize: appState.show_width * 0.035 + 'px', width: appState.show_width * 0.18 + 'px', textAlign: 'right', color: '#ffffff', fontWeight: 'bold' }">密码</div>

            <!-- 文本 -->
            <van-field v-model="password" placeholder="请输入密码" :style="{ fontSize: appState.show_width * 0.035 + 'px', background: '#00000000', width: appState.show_width * 0.52 + 'px' }" />
          </div>

          <!-- 确认密码 -->
          <div :style="{ width: appState.show_width * 0.72 + 'px', height: appState.show_width * 0.085 + 'px', borderRadius: appState.show_width * 0.02 + 'px', marginTop: appState.show_width * 0.01 + 'px', display: 'flex', flexDirection: 'row', alignItems: 'center', background: '#ae6af4' }">
            <!-- 标题 -->
            <div :style="{ fontSize: appState.show_width * 0.035 + 'px', width: appState.show_width * 0.18 + 'px', textAlign: 'right', color: '#ffffff', fontWeight: 'bold' }">确认密码</div>

            <!-- 文本 -->
            <van-field v-model="password_confirm" placeholder="请输入确认密码" :style="{ fontSize: appState.show_width * 0.035 + 'px', background: '#00000000', width: appState.show_width * 0.52 + 'px' }" />
          </div>

          <!-- 店铺名称 -->
          <div :style="{ width: appState.show_width * 0.72 + 'px', height: appState.show_width * 0.085 + 'px', borderRadius: appState.show_width * 0.02 + 'px', marginTop: appState.show_width * 0.01 + 'px', display: 'flex', flexDirection: 'row', alignItems: 'center', background: '#ae6af4' }">
            <!-- 标题 -->
            <div :style="{ fontSize: appState.show_width * 0.035 + 'px', width: appState.show_width * 0.18 + 'px', textAlign: 'right', color: '#ffffff', fontWeight: 'bold' }">店铺名称</div>

            <!-- 文本 -->
            <van-field v-model="name" placeholder="请输入店铺名称" :style="{ fontSize: appState.show_width * 0.035 + 'px', background: '#00000000', width: appState.show_width * 0.52 + 'px' }" />
          </div>

          <!-- 店铺Logo -->
          <div :style="{ width: appState.show_width * 0.72 + 'px', height: appState.show_width * 0.18 + 'px', borderRadius: appState.show_width * 0.02 + 'px', marginTop: appState.show_width * 0.01 + 'px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', background: '#ae6af4' }">
            <div :style="{ width: appState.show_width * 0.15 + 'px', height: appState.show_width * 0.15 + 'px', borderRadius: appState.show_width * 0.02 + 'px', border: appState.show_width * 0.003 + 'px dashed #cccccc', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#f8f8f8', overflow: 'hidden' }" @click="onChangePicture">
              <!-- 图标 -->
              <van-icon v-if="shop_logo == ''" name="plus" :size="Math.floor(appState.show_width * 0.04)" color="#666666" />

              <!-- 文本 -->
              <div v-if="shop_logo == ''" :style="{ fontSize: appState.show_width * 0.025 + 'px', marginTop: appState.show_width * 0.015 + 'px', color: '#666666' }">店铺Logo</div>

              <!-- 图标 -->
              <img v-if="shop_logo != ''" :src="shop_logo" :style="{ width: appState.show_width * 0.15 + 'px', height: appState.show_width * 0.15 + 'px' }" />
            </div>
          </div>

          <!-- 注册按钮 -->
          <div :style="{ width: appState.show_width * 0.72 + 'px', marginTop: appState.show_width * 0.02 + 'px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }" @click="handleRegister">
            <!-- 图片 -->
            <img src="/img/btn.png" :style="{ width: appState.show_width * 0.7 + 'px', height: appState.show_width * 0.11 + 'px' }" />

            <!-- 文本 -->
            <div :style="{ fontSize: appState.show_width * 0.04 + 'px', marginTop: -appState.show_width * 0.085 + 'px', marginBottom: appState.show_width * 0.05 + 'px', color: '#ffffff', fontWeight: 'bold' }">注册{{ appState.app_name }}</div>
          </div>

          <!-- 下载按钮 -->
          <div :style="{ width: appState.show_width * 0.8 + 'px', height: appState.show_width * 0.08 + 'px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }" @click="onShowDownload">
            <div :style="{ fontSize: appState.show_width * 0.035 + 'px', color: '#6323eb', fontWeight: 'bold' }">已经注册，立即下载</div>
            <div :style="{ width: appState.show_width * 0.32 + 'px', height: appState.show_width * 0.003 + 'px', background: '#6323eb' }"></div>
          </div>
          <input ref="file_picture" type="file" accept="image/*" @change="onAddPicture" style="display: none" />
        </div>

        <!------------------------------------- 下载界面 ------------------------------------->
        <div v-if="show_type == 1" :style="{ width: appState.show_width * 0.8 + 'px', marginRight: appState.show_width * 0.01 + 'px', display: 'flex', flexDirection: 'column', alignItems: 'center' }">
          <!-- 图标 -->
          <img src="/img/smile.png" :style="{ width: appState.show_width * 0.4 + 'px', marginTop: appState.show_width * 0.1 + 'px' }" />

          <!-- 下载按钮 -->
          <div :style="{ width: appState.show_width * 0.72 + 'px', marginTop: appState.show_width * 0.06 + 'px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }" @click="handleDownload">
            <!-- 图片 -->
            <img src="/img/btn.png" :style="{ width: appState.show_width * 0.7 + 'px', height: appState.show_width * 0.11 + 'px' }" />

            <!-- 文本 -->
            <div :style="{ fontSize: appState.show_width * 0.04 + 'px', marginTop: -appState.show_width * 0.085 + 'px', marginBottom: appState.show_width * 0.05 + 'px', color: '#ffffff', fontWeight: 'bold' }">下载{{ appState.app_name }}</div>
          </div>

          <!-- 提示文本 -->
          <div :style="{ marginTop: appState.show_width * 0.025 + 'px', display: 'flex', flexDirection: 'row', alignItems: 'center' }">
            <!-- 文本 -->
            <div :style="{ fontSize: appState.show_width * 0.035 + 'px', color: '#999999' }">{{ appState.app_name }}提供技术支持</div>

            <!-- 图标 -->
            <van-icon name="arrow" :size="Math.floor(appState.show_width * 0.035)" style="color: #999999" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- 函数 -->
<script setup lang="ts">
import { onMounted, ref } from "vue";

//本地
import { Platform } from "../../types";
import useAppStore from "../../store/app";
import { getUrlParame } from "../../utils";
import { uploadImage } from "../../api/request/upload";
import { appInfo, register } from "../../api/request/base";

//注册数据
const name = ref(""); //名称
const phone = ref(""); //手机号
const password = ref(""); //密码
const user_uid = ref(""); //邀请码
const password_confirm = ref(""); //确认密码

//数据赋值
const show_type = ref(0); //显示类型
const shop_logo = ref(""); //商铺Logo
const logo_file = ref(null); //商铺Logo文件
const ios_download_url = ref(""); //IOS下载地址
const android_download_url = ref(""); //Android下载地址
const file_picture = ref<HTMLInputElement | null>(null); //读取文件
const { appState, SHOW_TIPS, CHANGE_SHOW_LOADING } = useAppStore();

//初始化
onMounted(async () => {
  //获取参数
  const param: any = getUrlParame();

  //获取App数据
  const appInfoData: any = await appInfo();

  //数据赋值
  user_uid.value = param && param.user_uid ? String(param.user_uid) : "";

  //数据赋值
  ios_download_url.value = appInfoData.ios_download_url; //IOS下载地址
  android_download_url.value = appInfoData.android_download_url; //Android下载地址
});

//返回
const onBack = () => {
  //数据赋值
  show_type.value = 0;
};

//处理下载
const handleDownload = () => {
  //IOS下载
  if (appState.platform == Platform.IOS) {
    //打开链接
    if (ios_download_url.value != "") window.open(ios_download_url.value, "_self");
  }
  //安卓下载
  else {
    //打开链接
    if (android_download_url.value != "") window.open(android_download_url.value, "_self");
  }
};

//修改图片
const onChangePicture = () => {
  //选择图片
  file_picture.value?.click();
};

//显示下载
const onShowDownload = async () => {
  //数据赋值
  show_type.value = 1;
};

//处理注册
const handleRegister = async () => {
  //显示提示
  if (name.value == "") return SHOW_TIPS("请输店铺名称！");
  if (phone.value == "") return SHOW_TIPS("请输入手机号！");
  if (password.value == "") return SHOW_TIPS("请输入密码！");
  if (password_confirm.value == "") return SHOW_TIPS("请输入确认密码！");
  if (password_confirm.value != password.value) return SHOW_TIPS("两次密码输入不一致！");
  if (!logo_file.value) return SHOW_TIPS("请上传店铺Logo！");

  //显示等待
  CHANGE_SHOW_LOADING(true);

  //上传图片
  var logo_url: string = "";
  await uploadImage(logo_file.value, async (result: boolean, data: any) => {
    //上传成功
    if (result == true && data.status == 0) {
      //数据赋值
      logo_url = data.data.url;
    }
    //上传失败
    else {
      //显示提示
      SHOW_TIPS("修改失败", "cross");
      //隐藏等待
      CHANGE_SHOW_LOADING(false);
    }
  });

  //图片上传失败
  if (logo_url == "") return;

  //参数赋值
  var registerParame: any = {
    logo: logo_url, //Logo（必填）
    phone: phone.value, //手机号（必填）
    shop_name: name.value, //商铺名称（必填）
    password: password.value, //账号密码（必填）
  };
  if (user_uid.value != "") registerParame.user_uid = user_uid.value; //用户邀请码（选填）

  //注册账号
  await register(registerParame);

  //注册成功
  SHOW_TIPS("注册成功", "success");

  //隐藏等待
  CHANGE_SHOW_LOADING(false);

  //清空数据
  name.value = ""; //店铺名称
  phone.value = ""; //手机号
  password.value = ""; //密码
  shop_logo.value = ""; //商铺Logo
  logo_file.value = null; //图标文件
  password_confirm.value = ""; //确认密码

  //数据赋值
  show_type.value = 1;
};

//修改图片
const onAddPicture = async (event: any) => {
  //数据赋值
  logo_file.value = event.target.files[0];

  //判断返回
  if (!logo_file.value) return;

  //获取本地图片预览地址
  shop_logo.value = URL.createObjectURL(logo_file.value);
};
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
