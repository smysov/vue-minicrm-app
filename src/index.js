import './assets/styles/main';
import Vue from 'vue';
import App from './App';
import store from './store';
import router from './routes';

new Vue({
  el: '#app',
  store,
  router,
  render: (h) => {
    return h(App);
  },
});
