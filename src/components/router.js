// 1.导入两个方法
// creatRouter 方法用于创建路由的实例对象
// creatWebHashHistory 用于指定路由的工作模式（hash）
import {createRouter,createWebHashHistory} from 'vue-router'

import Progress from './Progerss/Progress.vue'
import Transimit from './Transimist/Transimit.vue'
import Prediction from './Prediction/Prediction.vue'

const router = createRouter({
    // 路由工作模式
    history:createWebHashHistory(),
    linkActiveClass:'active-router',
     // 路由匹配规则
    routes:[
     // path 是 hash地址 component是要展示的组件
     // 重定向Home 访问path 强制跳转到myhome
        {path:'/',redirect:'/progress'},
        {path:'/progress',component: Progress},
        {path:'/transimit',component:Transimit},
        {path:'/prediction',component:Prediction} 
    ]
})
export default router