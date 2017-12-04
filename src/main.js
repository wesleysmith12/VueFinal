import Vue from 'vue' //ToDo: Import vue and name it Vue
import VueRouter from 'vue-router'  //ToDo: Import vue-router and name it VueRouter
import VueResource from 'vue-resource'  //ToDo: Import vue-resource and name it VueResource

import App from './App.vue' //ToDo: Import App.vue and name it App
import { routes } from './routes' //ToDo: Import routes.js and use the {} passing routes
import store from './store/store.js' //ToDo: Import store/store.js and name it store

Vue.use(VueRouter); //ToDo Initialize VueRouter using Vue.use()
Vue.use(VueResource); //ToDo Initialize VueResource using Vue.use()

Vue.http.options.root = 'https://vue-final-9b7e4.firebaseio.com/' //ToDo: Set Equal to your Firebase Database URL

Vue.filter('currency', (value) => {
  return $value.toLocalString()//ToDo: Return value.toLocalString(), Add $ sign before the value
});

const router = new VueRouter({
    mode: 'history',//ToDo: Set router mode to history
    routes  //ToDo: Pass routes constant imported from above
});

new Vue({
  el: '#app',
  router, //ToDo: Pass the router constant to vue application
  store,  //ToDo: Pass store constant to vue application,
  render: h => h(App)
})
