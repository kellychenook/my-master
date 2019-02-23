<template>
    <div class="home">
        <p>{{food}}</p>
        <button @click="handle('back')">返回上一页</button>
        <button @click="handle('push')">跳转至argu</button>
        <button @click="handle('replace')">替换成main_info</button>

        <button @click="getInfo">请求数据</button>
    </div>
</template>

<script>
    import {getUserInfo} from '@/api/user';
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
            }
        }
    };
</script>
