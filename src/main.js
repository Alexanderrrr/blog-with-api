import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AppPosts from './components/AppPosts'
import SinglePost from './components/SinglePost'
import AddPost from './components/AddPost'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  {path:'/', redirect:'/cars'},
  {path:'/posts', component: AppPosts, name:'posts'},
  {path:'/posts/:id', component: SinglePost, name: 'single-post'},
  {path:'/add', component: AddPost, name:'add-post'},
  {path:'/edit/:id', component: AddPost}

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
