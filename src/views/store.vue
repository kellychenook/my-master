<template>
    <div>
        <a-input v-model="stateValue"></a-input>
        <p>{{stateValue}} lastletter=>{{inputValueLastLetter}}</p>

        <!-- 将a-input子组件中的输入值传递到a-show子组件中，实现两兄弟组件通信 -->
        <!-- <a-input @input="handleInput"></a-input>
        <a-show :content="inputValue"></a-show> -->

        <p>appName:{{appName}}</p>
        <p>appNameWithVersion:{{appNameWithVersion}}</p>
        
        <p>userName:{{userName}}</p>
        <p>userNameFirstLetter:{{userNameFirstLetter}}</p>
        
        <button @click="handleChangeAppName">修改appName的值</button>
        <button @click="handleUpdateAppName">更新appName的值</button>
        <p>appVersion:{{appVersion}}</p>

        <button @click="registerModule">动态注册模块</button>
        <p v-for="(item,index) in todoList" :key="index">
            {{item}}
        </p>
    </div>
</template>

<script>
import AInput from '_c/AInput.vue';
import AShow from '_c/AShow.vue';
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
export default {
    name:'store',
    data(){
        return{
            inputValue:'',
        }
    },
    components:{
        AInput,
        AShow,
    },
    computed:{
        ...mapState([
            'appName','appVersion'
        ]),
        stateValue:{
            get(){
                return this.$store.state.stateValue;
            },
            set(val){
                this.SET_STATE_VALUE(val);
            }
        },
        ...mapState({
            userName:state=>state.user.userName,
            todoList:state=>state.todo ? state.todo.todoList : [],
        }),
        inputValueLastLetter(){
            return this.inputValue.substr(-1,1);//substr() 方法可在字符串中抽取从下标-1倒数一个字符。
        },
        ...mapGetters([
            'appNameWithVersion','userNameFirstLetter'
        ]),
    },
    // 我的理解是v-model中inputValue传递参数给子组件，触发子组件input事件，该事件将value传递给父组件；
    methods:{
        ...mapMutations([  //注意：mapMutations在methods方法中：
            'SET_USER_NAME','SET_APP_NAME','SET_APP_VERSION','SET_STATE_VALUE'
        ]),
        ...mapActions([
           'updateAppName' 
        ]),
        handleInput(val){
            this.inputValue=val;
        },
        handleChangeAppName(){
            // 写法三 mutation
            this.SET_APP_VERSION();
            this.SET_APP_NAME('newAppName');
            this.SET_USER_NAME({userName:'newUserName'});
        },
        handleUpdateAppName(){
            // action
            // this.updateAppName();
            this.$store.dispatch('updateAppName');
        },
        registerModule(){
            this.$store.registerModule('todo',{
                state:{
                    todoList:[
                        '学习mutations',
                        '学习actions',
                    ]
                }
            })
        },
    }
}
</script>

<style>

</style>
