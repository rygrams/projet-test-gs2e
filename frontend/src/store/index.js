import Vue from 'vue';
import Vuex from 'vuex';

import auth from "./modules/auth";
import customer from "./modules/customer";
import restaurant from "./modules/restaurant";
import product from "./modules/product";


Vue.use(Vuex);



export default new Vuex.Store({
  modules : {
    auth,
    customer,
    restaurant,
    product
  }
})
