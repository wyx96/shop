import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/home',
    name:'Home',
    component:  ()=> import('@/views/Home')
  },
  {
    path:'/login',
    name:'Login',
    meta:{
      isHidden:true
    },
    component:  ()=> import('@/views/Login')
  },
  {
    path:'/register',
    name:'Register',
    meta:{
      isHidden:true
    },
    component:  ()=> import('@/views/Register')
  },
  {
    path:'/search',
    name:'Search',
    component:  ()=> import('@/views/Search')
  },
  {
    path:'/',
    redirect:'/home'
  }
]

const originPush = VueRouter.prototype.push

VueRouter.prototype.push = function(location,res,rej){
  if(res === undefined && rej === undefined){
    return originPush.call(this,location).catch(()=>{})
  }else{
    return originPush.call(this,location,res,rej)
  }
}


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
