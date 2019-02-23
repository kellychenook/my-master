<template>
    <div>
        <count-to ref="getNumber" :count-to-class="myClass" :end-val="endVal">
            <span slot="left">左边插槽</span>
            <span slot="right">右边插槽</span>
        </count-to>
        <button @click="getNumber">获取数值</button>
        <button @click="updateVal">更新数值</button>
    </div>
</template>
<script>
import CountTo from '@/components/count-to'
export default {
    name:'count_to',
    data (){
        return{
            myClass:'myClass',
            endVal:100,
        }
    },
    components:{
        CountTo
    },
    methods:{
        getNumber(){
            console.log(this.$refs.getNumber.getNumber());
        },
        updateVal(){
            this.endVal=Math.random()*100;
        }
    }
}
</script>
<style>
    .myClass{
        color: brown;
        font-size: 24px;
    }
</style>


