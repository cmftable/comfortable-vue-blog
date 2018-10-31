import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BlogPost from './views/BlogPost.vue'
import Page from './views/Page.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: BlogPost
    },
    {
      path: '/:slug',
      name: 'page',
      component: Page
    }
  ]
})
