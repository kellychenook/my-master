<template>
    <div class="split-pane-con">
        <!-- <split-pane v-model="offset"> -->
        <split-pane :value.sync='offset'>
            <div slot="pane-left">
                左边面板
            </div>
            <div slot="pane-right">
                右边面板
            </div>
        </split-pane>
    </div>
</template>

<script>
import SplitPane from '_c/split-pane'
export default {
    components:{
        SplitPane,
    },
    data(){
        return {
            offset:0.5,
        }
    },
}
</script>

<style lang="scss">
 .split-pane-con{
     width: 500px;
     height: 200px;
     background: lemonchiffon;
     margin:0 auto;
     &>div{
         text-align: left;
         color: beige;
     }
 }
</style>
