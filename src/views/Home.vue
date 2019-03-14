<template>
    <div class="home">
        <!-- <p>{{food}}</p>
        <button @click="handle('back')">返回上一页</button>
        <button @click="handle('push')">跳转至argu</button>
        <button @click="handle('replace')">替换成main_info</button>
        <button @click="getInfo">请求数据</button>
        <button @click="deleteData">打印数据</button>
        <button @click="handleLogout">退出登录</button> -->

        <Row>
            <i-col></i-col>
        </Row>
        <Row :gutter="16">
            <i-col span="8"></i-col>
            <i-col span="8"></i-col>
            <i-col span="8"></i-col>
        </Row>
        <Row :gutter="16">
            <i-col :md="6" :sm="12" xs="24"></i-col>
            <i-col :md="6" :sm="12" xs="24"></i-col>
            <i-col :md="6" :sm="12" xs="24"></i-col>
            <i-col :md="6" :sm="12" xs="24"></i-col>
        </Row>

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
<style lang="scss">
    .home{
        .ivu-col{
            height: 50px;
            margin-bottom: 10px;
            background-color: pink;
            background-clip: content-box;//保证内容区域有背景色
        }
    }
</style>

