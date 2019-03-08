<template>
    <div class="menu-box">
        <!-- <a-menu>
            <a-menu-item>11</a-menu-item>
            <a-menu-item>22</a-menu-item>
            <a-submenu>
                <div slot="title">33</div>
                <a-menu-item>33-1</a-menu-item>
                <a-menu-item>33-2</a-menu-item>
                <a-submenu>
                    <div slot="title">33-3</div>
                    <a-menu-item>33-3-1</a-menu-item>
                    <a-menu-item>33-3-2</a-menu-item>
                </a-submenu>
            </a-submenu>
        </a-menu>  -->

        <a-menu>
            <template v-for="(item,index) in list">
                <a-menu-item v-if="!item.children" :key="`menu_item_${index}`">{{item.title}}</a-menu-item>
                <re-submenu v-else :key="`menu_item_${index}`" :parent="item" :index="index"></re-submenu>
            </template>
        </a-menu>
    </div>
</template>

<script>
import ReSubmenu from  './re-submenu.vue'
import menuComponents from '_c/menu'
export default {
    name:'menu_page',
    components:{
        ...menuComponents,
        ReSubmenu,
    },
    data(){
        return{
            list:[
                {
                    title:'11'
                },
                {
                    title:'22'
                },
                {
                    title:'33',
                    children:[
                        {
                            title:'33-1'
                        },
                        {
                            title:'33-2',
                            children:[
                                {
                                    title:'33-2-1'
                                },
                                {
                                    title:'33-2-2'
                                },
                                {
                                    title:'33-2-3'
                                },
                            ]
                        },
                        {
                            title:'33-3'
                        },
                    ]
                },
            ]
        }
    }
}
</script>

<style lang="scss">
.menu-box{
    width: 300px;
    height: 400px;
}
</style>
