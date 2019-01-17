<template>
    <div :class="$style.email">
        email:这是邮箱内容
        <button @click="handleClick">点击我</button>
    </div>
</template>

<script>
export default {
    mounted(){
        // console.log(this.$bus);
    },
    methods:{
        handleClick(){
            this.$bus.$emit('on-click','Hello World')
        },
    }
}
</script>

<style lang="scss" module>
.email{
    border: 1px solid blue;
}
</style>
