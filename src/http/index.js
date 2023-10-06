// src/http/index.js
//创建统一请求api
import axios from './axios'
/**
 @author 吴宗波
 @params data 请求参数 json 格式
 @description 用户登录方法
 */
const login=(data)=>{
    return axios.request({
        url:'api/mobile/elogin',//api/mobile/elogin
        method:'post',
        data
    })
}
//导出请求方法
export {
    login,
}