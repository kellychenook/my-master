<template>
    <div :class="$style.tel">
        tel:这是电话内容
        <p>{{message}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            message:'',
        }
    },
    mounted(){
        this.$bus.$on('on-click',mes=>{
            this.message=mes;
        })
    }
}
</script>

<style lang="scss" module>
.tel{
    border:1px solid red;
}


</style>
