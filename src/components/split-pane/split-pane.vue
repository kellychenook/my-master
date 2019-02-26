<template>
    <div class="split-pane-wrapper" ref="paneWrapper">
        <div class="pane pane-left" :style="{width:leftOffsetPercent,paddingRight:`${triggerWidthNumber/2}px`}">
            <slot name="pane-left"></slot>
        </div>
        <div class="pane-trigger" @mousedown="handleMouseDown" :style="{left:triggerLeft,
        width:`${triggerWidthNumber}px`}"></div>
        <div class="pane pane-right" :style="{left:leftOffsetPercent,paddingLeft:`${triggerWidthNumber/2}px`}">
            <slot name="pane-right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'SplitPane',
    props:{
        value:{
            type:Number,
            default:0.2
        },
        triggerWidthNumber:{
            type:Number,
            default:8
        },
        minLeftOffset:{
            type:Number,
            default:0.01
        },
        maxLeftOffset:{
            type:Number,
            default:0.99
        }, 
    },
    data(){
        return{
            canMove:false,
            triggerInitOffset:0,
        }
    },
    computed:{
        leftOffsetPercent(){
            return `${this.value * 100}%`
        },
        triggerLeft(){
            return `calc(${this.value * 100}% - ${this.triggerWidthNumber/2}px)`
        },
    },
    methods:{
        handleMouseDown(event){
            this.canMove=true;
            document.addEventListener('mousemove',this.handleMouseMove);  
            document.addEventListener('mouseup',this.handleMouseUp);
            // console.log(event.pageX);//鼠标位置距离页面左侧的距离
            // console.log(event.srcElement.getBoundingClientRect().left);//trigger条元素距离页面左侧的距离
            this.triggerInitOffset=event.pageX-event.srcElement.getBoundingClientRect().left;
        },
        handleMouseUp(){
            this.canMove=false;
        },
        handleMouseMove(event){
            // console.log(event.pageX);//鼠标距离页面左侧的距离
            // console.log(this.$refs.paneWrapper.getBoundingClientRect().left);//块元素距离页面左边界的距离；
            // console.log(event.pageX-this.$refs.paneWrapper.getBoundingClientRect().left) //返回鼠标距离块元素左边界的距离
            if(!this.canMove) return;
            const paneWrapper=this.$refs.paneWrapper.getBoundingClientRect()
            let offset=(event.pageX-paneWrapper.left-this.triggerInitOffset+this.triggerWidthNumber/2)/paneWrapper.width;
            // this.value=offset / paneWrapper.width
            // 控制边界不超过
            if(offset<this.minLeftOffset) offset=this.minLeftOffset
            if(offset>this.maxLeftOffset) offset=this.maxLeftOffset
            // this.$emit('input',offset);
            this.$emit('update:value',offset);
        }
    }
}
</script>

<style lang="scss">
    .split-pane-wrapper{
        width: 100%;
        height: 100%;
        position: relative;
        .pane{
            position: absolute;
            top:0;
            height: 100%;
        }
        .pane-left{
            background: red;
        }
        .pane-right{
            background: green;
            right:0;
        }
        .pane-trigger{
            position: absolute;
            height: 100%;
            background: yellow;
            z-index: 10;
            user-select: none;//鼠标拖懂时不选中其他
            cursor: col-resize;//鼠标拖动效果
            
        }
    }
</style>

