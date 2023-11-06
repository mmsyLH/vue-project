import axios from "axios";
// 发送请求的对象
const request=axios.create({
    baseURL: 'https://api.jqrjq.cn',
    timeout:5000
})

//request拦截器的处理
// 1．可以对请求做统一的处理
//2．比如统一的加入token,Content-Type等
request.interceptors.request.use(config=>{
    config.headers["Content-Type"]='application/json;charset=utf-8';
    return config;
},error => {
    console.log("请求出错了啊")
    return Promise.reject(error)
})

//response拦截器
//在调用接口响应后，统一的处理返回结果
request.interceptors.response.use(
    response=>{
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
        return res;
    },error => {
        // consolo.error("err",error)
        // 拒绝处理结果返回
        return Promise.reject(error)
    }
)
//导出
export default request