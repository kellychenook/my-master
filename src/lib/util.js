import Cookies from 'js-cookie'
// 存放与业务结合的方法
export const setTitle=(title)=>{
    window.document.title=title || 'admin';
}

export const setToken=(token,tokenName='token')=>{
    Cookies.set(tokenName,token)
}
export const getToken=(tokenName='token')=>{
    return Cookies.get(tokenName)
}