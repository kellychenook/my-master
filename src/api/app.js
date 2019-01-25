export const getAppName = () => {
    return new Promise ((resolve,reject)=>{
        const err =null;
        setTimeout(()=>{ //模拟接口请求；
            if(!err) resolve({code:200,info:{appName:'喜洋洋'}});
            else reject(err);
        })
    })
}