<template>
    <div class="layout-wrapper">
        <Layout class="layout-outer">
            <Sider collapsible hide-trigger v-model="collapsibled" breakpoint='md'></Sider>
            <Layout>
                <Header class="header-wrapper">
                    <Icon :class="triggerClass" @click.native="handleCollapsed" type="md-menu" :size="32"></Icon>
                </Header>
                <Content class="content-con">
                    <Card shadow class="page-card">
                        <router-view></router-view>
                    </Card>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<script>
export default {
    data(){
        return {
            collapsibled:false
        }
    },
    computed:{
        triggerClass(){
            return [
                this.collapsibled ? 'rotate':''
            ]
        }
    },
    methods:{
        handleCollapsed(){
            this.collapsibled=!this.collapsibled;
        }
    }

}
</script>

<style lang="scss">
.layout-wrapper{
    height: 100%;
    .layout-outer{
        height:100%;
    }
    .header-wrapper{
        background-color: #fff;
        box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
        padding:0 18px;
        text-align: left;
        .ivu-icon{
            cursor: pointer;
            transition: transform .3s ease;
            &.rotate{
                transform: rotateZ(-90deg);
                transition: transform .3s ease;
            }
        }
    }
    .content-con{
        padding:10px;
    }
    .page-card{
        min-height: calc(100vh - 84px);
    }
}
    
</style>
