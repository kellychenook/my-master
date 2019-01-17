<template>
    <div>
         <a-input v-model="handleInput"></a-input>
        <p>{{inputValue}}</p>

        <!-- 将a-input子组件中的输入值传递到a-show子组件中，实现两兄弟组件通信 -->
         <a-input @input="handleInput"></a-input>
        <a-show :content="inputValue"></a-show>
    </div>
</template>

<script>
import AInput from '_c/AInput.vue';
import AShow from '_c/AShow.vue';
export default {
    name:'store',
    data(){
        return{
            inputValue:'',
        }
    },
    components:{
        AInput,
        AShow,
    },
    // 我的理解是v-model中inputValue传递参数给子组件，触发子组件input事件，该事件将value传递给父组件；
    methods:{
        handleInput(val){
            this.inputValue=val;
        }
    }
}
</script>

<style>

</style>
