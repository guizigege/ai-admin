import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Application from '@/components/Application'
import ApplicationUpdate from '@/components/ApplicationUpdate'
import AiQuestion from '@/components/AiQuestion'
import Chatmsg from '@/components/Chatmsg'
import Customer from '@/components/Customer'
import Chat from '@/components/Chat'
import SearchMsg from '@/components/SearchMsg'
import {get} from '@/utils/http'
Vue.use(Router);
const router = new Router({
  routes: [
    {path:"*",redirect:"/login"},
    {path:"/login",component:Login},
    {path:"/home",component:Home,
      meta:{
        title:'首页',
        requireAuth: true
      },
      children:[
        {
          path:"/home/application",
          component:Application,
          meta:{
            title:'应用列表',
            requireAuth: true
          }
        },
        {
          path:"/home/application/edit/:appid",
          component:ApplicationUpdate,
          meta:{
            title:'编辑应用列表',
            requireAuth: true
          }
        },
        {
          path:"/home/application/add",
          component:ApplicationUpdate,
          meta:{
            title:'添加应用',
            requireAuth: true
          }
        },
        {
          path:"/home/ai_question",
          component:AiQuestion,
          meta:{
            title:'ai列表',
            requireAuth: true
          }
        },
        {
          path:"/home/customer",
          component:Customer,
          meta:{
            title:'客服系統',
            requireAuth: true
          }
        },
        {
          path:"/home/chat",
          component:Chat,
          meta:{
            title:'聊天',
            requireAuth: true
          }
        },
        {
          path:"/home/chat_msg",
          component:Chatmsg,
          meta:{
            title:'用户列表',
            requireAuth: true
          }
        },
        {
          path:"/home/search_msg",
          component:SearchMsg,
          meta:{
            title:'用户列表',
            requireAuth: true
          },

        },
      ]
    }
  ]
});
export default router
