export default store=>{
    // 判断本地存储中是否有state 如果存在则替换到state;
    if(localStorage.state) store.replaceState(JSON.parse(localStorage.state));
    store.subscribe((mutation,state)=>{
        localStorage.state=JSON.stringify(state);
    })
}