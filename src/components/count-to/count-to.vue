<template>
    <div>
        <slot name="left"></slot>
        <span ref="number" :class="countClass" :id="eleId"></span>
        <slot name="right"></slot>
    </div>
</template>

<script>
import CountUp from 'countup' //引入countup插件
export default {
    name:'CountTo',
    data(){
        return{
            counter:{},
        }
    },
    props:{
        /**
         * 数字初始值
         */
        startVal:{
            type:Number,
            default:0,
        },
        /**
         * 数字结束值
         */
        endVal:{
            type:Number,
            required:true,//必填项
        },
        /**
         * 动画开始延迟时长,单位为毫秒
         */
        delay:{
            type:Number,
            default:0,
        },
        /**
         * 小数点后保留的位数
         */
        decimals:{
            type:Number,
            default:0,
        },
        /**
         * 动画间隔时间
         */
        duration:{
            type:Number,
            default:1,
        },
        /**
         * 是否使用变速效果动画；
         */
        useEasing:{
            type:Boolean,
            default:false,
        },
        /**
         * 是否使用数字分隔
         */
        useGrouping:{
            type:Boolean,
            default:true,
        },
        /**
         * 分组的分隔符号
         */
        separator:{
            type:String,
            default:','
        },
        /**
         * 小数点分隔符号
         */
        decimal:{
            type:String,
            default:'.'
        },
        /**
         * 组件传入的样式类名
         */
        countToClass:{
            type:String,
            default:'',
        }
    },
    computed:{
        eleId(){ //在使用自定义组件的时候，为防止英文id值唯一而出错， 而每个组件的uid值唯一的。
            return `count_up_${this._uid}`
        },
        countClass(){
            return [
                'count-to-number', //自定义样式类名；
                this.countToClass
            ]
        }
    },
    mounted(){
        this.$nextTick(()=>{
            this.counter=new CountUp(this.eleId,this.startVal,this.endVal,this.decimals,this.duration,{
                useEasing: this.useEasing, 
                useGrouping: this.useGrouping, 
                separator: this.separator, 
                decimal: this.decimal, 
            });
            setTimeout(()=>{
                this.counter.start();//动画开始
            },this.delay); //动画开始延迟
        })
    },
    methods:{
        getNumber(){
            return this.$refs.number.innerText;
        }
    },
    // 更新endVal的值
    watch:{
        endVal(newVal,oldVal){
            if(newVal!==oldVal){
                this.counter.update(newVal);
            } 
        }
    }
}
</script>

<style>
    .count-to-number{
        font-weight: bolder;
        color: blue;
        font-size: 16px;
        padding:0 10px;
    }
</style>
