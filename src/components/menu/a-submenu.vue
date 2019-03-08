<template>
    <ul class="a-submenu">
        <div class="a-submenu-title" @click="handleClick">
            <slot name="title"></slot>
            <div class="Triangle" :style="{transform:`rotateZ(${show? 90 : 0}deg)`}"></div>
        </div>
        <div v-show="show" class="a-submenu-child-box">
            <slot></slot>
        </div>
        
    </ul>
</template>

<script>
export default {
    name:'ASubmenu',
    data(){
        return{
            show:false,
        }
    },
    methods:{
        handleClick(){
            this.show=!this.show;
        }
    }
}
</script>

<style lang='scss'>
    .a-submenu{
        background:rgb(148, 145, 145);
        .a-submenu-title{
            background: black;
            color: white;
            position: relative;
            .Triangle{
                position: absolute;
                right: 5px;
                top:5px;
                width: 0;
                height: 0;
                border-top: 5px solid transparent;
                border-left: 8px solid white;
                border-bottom: 5px solid transparent;
            }
        }
        
        .a-submenu-child-box{
            overflow: hidden;
            padding-left: 20px;
        }
    }
</style>
