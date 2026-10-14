import axios from "axios";
import useAppStore from "../../store/app";

//数据赋值
const { appState } = useAppStore();

//上传图片
export const uploadImage = async (file: any, callback: Function) => {
  //初始化数据
  const formData = new FormData();
  formData.append("file", file);

  //上传图片
  try {
    //上传图片
    const response = await axios.post(appState.com_api_url + "api/upload/image", formData, {
      headers: {
        "access-control-allow-origin": "*",
        "Content-Type": "multipart/form-data",
      },
    });

    //回掉数据
    callback(true, response.data);
  } catch (error) {
    //回掉数据
    callback(false, error);
  }
};
