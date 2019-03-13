<template>
    <div>
        <span>账号：</span><input type="text" v-model="userName">
        <br>
        <span>密码：</span><input type="password" v-model="passWord">
        <br>
        <button @click="handleSubmit">登录</button>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name:'login_page',
    data(){
        return{
            userName:'',
            passWord:'',
        }
    },
    methods:{
        ...mapActions([
            'login'
        ]),
        handleSubmit(){
            this.login({
                userName:this.userName,
                password:this.passWord,
            }).then(()=>{
                this.$router.push({
                    name:'home'
                })
            }).catch(error=>{
                console.log(error);
            })
        }

    }
}
</script>

<style>

</style>
