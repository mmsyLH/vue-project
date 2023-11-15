import axios from '../http/axios'
export const addByArticle=(data)=>{
    return axios.request({
        url:'/api/article/add',//api/mobile/elogin
        method:'post',
        data
    })
}
export const all=()=>{
    return axios.request({
        url:'/api/article/all',//api/mobile/elogin
        method:'get',
    })
}
export const deleteById=(id)=>{
    return axios.request({
        url:'/api/article/delete/{id}='+id,//api/mobile/elogin
        method:'get',
    })
}
export const edit=(article)=>{
    return axios.request({
        url:'/api/article/edit',//api/mobile/elogin
        method:'post',
    })
}

export const getArticlesByUserId=(id)=>{
    return axios.request({
        url:'/api/article/getArticles/'+id,//api/mobile/elogin
        method:'get',
    })
}
export const findArticleById=(id)=>{
    return axios.request({
        url:'/api/article/one',
        method:'get',
        params:id
    })
}


export const getArticlesByPage=(data)=>{
    return axios.request({
        url:'/api/article/page',//api/mobile/elogin
        method:'post',
        data
    })
}
export const getArticlesByCateId=(cateId)=>{
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