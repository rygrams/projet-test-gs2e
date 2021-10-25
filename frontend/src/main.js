import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueFormulate from '@braid/vue-formulate';

import App from './App.vue';
import router from './router';
import './assets/tailwind.css';
import store from './store';
import { fr } from '@braid/vue-formulate-i18n';
import jwtService from './services/jwt-service';
import { API_URL } from './common/config';

//configuration des requetes http et enregistrement du jeton de connexion
Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = API_URL;
Vue.axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${jwtService.getToken()?.token}`;

//configuration des formulaires
Vue.use(VueFormulate, {
  plugins: [ fr ],
  locale: 'fr'
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
