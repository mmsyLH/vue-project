import axios from "axios";
import { ElMessage } from "element-plus";
import {getToken} from "@/utils/auth";

// 创建axios实例
const instance = axios.create({
    baseURL: 'https://api.jqrjq.cn/', // 请求基地址 https://api.jqrjq.cn/
    timeout: 6000
});

// 请求拦截器
instance.interceptors.request.use(
    (config) => {
        config.headers["Content-Type"]='application/json;charset=utf-8';
        // console.log("获取的token",getToken())
        if (getToken()){
            config.headers.token=getToken();
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

// 响应拦截器
instance.interceptors.response.use(
    (response) => {
        let res=response.data;
        //如果返回的是文件
        if(response.config.responseType==='blob' ){
            return res;
        }
        //如果返回是字符串
        if(typeof res==='string' ){
            //如果res不为空 就转成json对象
            res=res?JSON.parse(res):res;
        }
        //打印请求错误错误提示信息
        if (response.data.code !== 1) {
            ElMessage.error(response.data.msg || "服务器异常了");
        }
        return response.data;
    },
    (err) => {
        // console.log(err.response.data.data.validated_error);
        // console.log(err.response.data.msg);
        const errorMsg = err.response.data.data.validated_error.join(", ");
        ElMessage.error(err.response.data.msg ? errorMsg : "服务器异常了");
        console.log("服务器异常信息：",err)
        return Promise.reject(err);
    }
);

export default instance;
