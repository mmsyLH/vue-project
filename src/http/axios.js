import axios from "axios";
import { ElMessage } from "element-plus";

// 创建axios实例
const instance = axios.create({
    baseURL: 'https://api.jqrjq.cn/', // 请求基地址 https://api.jqrjq.cn/
    timeout: 6000
});

// 请求拦截器
instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (err) => {
        console.log("请求出错了");
        return Promise.reject(err);
    }
);

// 响应拦截器
instance.interceptors.response.use(
    (res) => {
        console.log("res.data:", res.data);
        if (res.data.code !== 1) {
            ElMessage.error(res.data.msg || "服务器异常了");
        }
        return res.data;
    },
    (err) => {
        // console.log(err.response.data.data.validated_error);
        // console.log(err.response.data.msg);
        const errorMsg = err.response.data.data.validated_error.join(", ");
        ElMessage.error(err.response.data.msg ? errorMsg : "服务器异常了");
        return Promise.reject(err);
    }
);

export default instance;
