import axios from '../http/axios'
export const addByArticle=(data)=>{
    return axios.request({
        url:'/api/article/add',//api/mobile/elogin
        method:'post',
        data
    })
}
const all=()=>{
    return axios.request({
        url:'/api/article/all',//api/mobile/elogin
        method:'get',
    })
}
const deleteById=(id)=>{
    return axios.request({
        url:'/api/article/delete/{id}='+id,//api/mobile/elogin
        method:'get',
    })
}
const edit=(article)=>{
    return axios.request({
        url:'/api/article/edit',//api/mobile/elogin
        method:'post',
    })
}

const getArticlesByUserId=(id)=>{
    return axios.request({
        url:'/api/article/getArticles/'+id,//api/mobile/elogin
        method:'get',
    })
}
const oneById=(data)=>{
    return axios.request({
        url:'/api/article/one',//api/mobile/elogin
        method:'get',
        data
    })
}
const getArticlesByPage=(data)=>{
    return axios.request({
        url:'/api/article/page',//api/mobile/elogin
        method:'post',
        data
    })
}
const getArticlesByCateId=(cateId)=>{
    return axios.request({
        url:'/api/article/'+cateId,//api/mobile/elogin
        method:'get',
    })
}
export const articleCatAll=()=>{
    return axios.request({
        url:'/api/articleCat/all',//api/mobile/elogin
        method:'get',
    })
}

//导出请求方法
export {
all,deleteById,edit,getArticlesByUserId,getArticlesByCateId,getArticlesByPage,oneById,
}