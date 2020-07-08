import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: require('./views/Home').default
    },
    {
      path: '/mongo',
      name: 'Mongo',
      component: require('./views/Mongo').default
    },
    {
      path: '/file',
      name: 'File',
      component: require('./views/File').default
    },
  

  ]
})