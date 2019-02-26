import Home from '@/views/Home.vue'
export default [
    {
        path: '/',
        alias:'/home_page', //路由的别名
        name: 'home',
        component: Home,
        props: route=>({
            food:route.query.food
        }),
        // beforeEnter:(to,from,next)=>{
        //     // if(from.name=='about') console.log('这是从about来的')
        //     // else console.log('这不是从about来的');
        //     next();
        // }
        meta:{
            title:'首页',
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login.vue'),
        meta:{
            title:'登录',
        }
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.//起到懒加载的作用
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
        props:{
            food:'banana'
        },
        meta:{
            title:'关于',
        }
    },
    {
        path: '/argu/:name', //动态路由匹配的使用
        name:'argu',
        component: () => import('@/views/argu.vue'),
        props:true, //使用布尔形式，则允许往props传递参数
    },
    {
        path: '/count-to', //动态路由匹配的使用
        name:'count_to',
        component: () => import('@/views/count-to.vue'),
        meta:{
            title:'动态数字',
        }
    },
    {
        path: '/split-pane', //动态路由匹配的使用
        name:'split_pane',
        component: () => import('@/views/split-pane.vue'),
        meta:{
            title:'split-pane',
        }
    },
    {
        path: '/parent',
        component: () => import('@/views/parent.vue'),
        children: [
            {
                path: 'child', //子路由的path不用写/
                component: () => import('@/views/child.vue'),
                meta:{
                    title:'子页面的部分',
                }
            }
        ],
        meta:{
            title:'父页面部分',
        }
    },
    {
        path: '/main_info', //命名视图的使用
        name:'main_info',
        components: { //加载多个组件
            default: () => import('@/views/child.vue'),
            email: () => import('@/views/email.vue'),
            tel: () => import('@/views/tel.vue')
        },
        meta:{
            title:'主体信息页面',
        }
    },
    {
        path:'/main',
        // redirect:'/',//路由重定向的使用
        // redirect:{
        //     name:'home',//通过命名路由的方式进行路由重定向 也可以
        // }
        redirect:to=>{
            // return{
            //     name:'home' //通过进入的路由做重定向 也可以
            // }
            return '/' //直接返回路由path 也可以
        },
        meta:{
            title:'主体页面',
        }
    },
    {
        path: '/store', //命名视图的使用
        name:'store',
        component: () => import( '@/views/store.vue'),
        meta:{
            title:'store页面',
        }

    },
    {
        path:'*', //此优先级是从前往后降低的。
        component:()=>import('@/views/error_404.vue'),
        meta:{
            title:'404页面',
        }
    }
]
