import {getAppName} from '@/api/app';
const actions={
    // 写法一
    // updateAppName({commit}){
    //     getAppName().then(res=>{
    //         // console.log(res);
    //         commit('SET_APP_NAME',res.info);
    //     }).catch(err=>{
    //         console.log(err);
    //     });
    // },
    // 写法二
    // es8 异步函数处理
    async updateAppName({commit}) {
        try {
            const {info:{appName}} = await getAppName()//执行getAppName得到的结果info:{appName},
            commit('SET_APP_NAME',appName);//执行提交操作；
        } catch(err) {
            console.log(err);
        }
    }
}
export default actions;