import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home';
import Users from './pages/Users';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
    },
  ],
});
