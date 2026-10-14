//数据操作
export const ObjectEx = {
  /**
   * 合并数据
   * @param obj1 数据1
   * @param obj2 数据2
   */
  merge(obj1: any, obj2: any) {
    for (const key in obj2) {
      obj1[key] = obj2[key];
    }
    return obj1;
  },

  /**
   * 浅拷贝
   * @param obj 数据
   */
  copy(obj: any) {
    const newObj: any = {};
    for (const k in obj) {
      newObj[k] = obj[k];
    }
    return newObj;
  },
};

/**
 * 获取URL参数
 */
export const getUrlParame = () => {
  //数据肤质
  var url: string = document.location.href;
  var url_parame: string = url.split("?").length == 1 ? "" : url.split("?")[1];

  //参数存在
  if (url_parame != "") {
    //数据赋值
    var parame: any = {};
    var parame_arr: Array<string> = url_parame.split("&");
    for (var i: number = 0; i < parame_arr.length; i++) {
      if (parame_arr[i].split("=").length == 2) parame[parame_arr[i].split("=")[0]] = parame_arr[i].split("=")[1];
    }

    //返回参数
    return parame;
  }

  //返回空参数
  return {};
};

/**
 * 获取数据
 * @param key Key
 */
export const getCookies = (key: string) => {
  //获取数据
  var cookieData: any = window.localStorage.getItem("Guazi_" + key);

  //返回数据
  return cookieData;
};

/**
 * 保存数据
 * @param key Key
 * @param data 数据
 */
export const saveCookies = (key: string, data: string) => {
  //保存数据
  window.localStorage.setItem("Guazi_" + key, data);
};
