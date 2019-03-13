<template>
    <div class="home">
        <p>{{food}}</p>
        <button @click="handle('back')">返回上一页</button>
        <button @click="handle('push')">跳转至argu</button>
        <button @click="handle('replace')">替换成main_info</button>

        <button @click="getInfo">请求数据</button>

        <button @click="deleteData">打印数据</button>

        <button @click="handleLogout">退出登录</button>
    </div>
</template>

<script>
    import {getUserInfo} from '@/api/user';
    import {mapActions} from 'vuex'
    export default {
        name: "home",
        props: {
            food: {
                type: String,
                default: "bear"
            }
        },
        components: {
        },
        methods: {
            ...mapActions([
                'logout'
            ]),
            deleteData(){
                let a=[1,2,3,4];
                let b=['a','b','c','d'];
                delete a[0];
                this.$delete(b,0);
                console.log(a);
                console.log(b);
            },
            handle(type) {
                if (type === "back") {
                    this.$router.back();
                } else if (type === "push") {
                    this.$router.push({
                        name: "argu",
                        params: {
                            name: "kelly"
                        }
                    });
                } else if (type === "replace") {
                    this.$router.replace({
                        name: "main_info"
                    });
                }
            },
            getInfo(){
                getUserInfo({userId:30}).then(res=>{
                    console.log(res.data);
                })
            },
            handleLogout(){
                this.logout()
                this.$$router.push({
                    name:'login'
                })
            }
        }
    };
</script>
