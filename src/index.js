import './assets/styles/main';
import Vue from 'vue';
import App from './App';
import store from './store';
import router from './routes';
// eslint-disable-next-line no-unused-vars
import users from './assets/data/users';

new Vue({
  el: '#app',
  store,
  router,
  render: (h) => {
    return h(App);
  },
});
