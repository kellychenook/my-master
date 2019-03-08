<template>
    <div class="a-menu">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'AMenu'
}
</script>

<style lang="scss">
.a-menu{
    *{
        list-style: none;
        padding:0;
        margin:0;
        text-align: left; 
        color: #ffffff;
    }
    
}
</style>

