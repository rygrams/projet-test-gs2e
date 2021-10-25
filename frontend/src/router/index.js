import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/home/Home.vue';
import Login from '../pages/authentication/Login.vue';
import Register from '../pages/authentication/Register.vue';
import Profile from '../pages/authentication/Profile.vue';
import Customers from "../pages/admin/list/Customer.vue";
import Restaurants from "../pages/admin/list/Restaurant.vue";
import Products from "../pages/admin/list/Product.vue";
import Dashboard from "../pages/admin/list/Dashboard.vue";

import RestaurantForm from '../pages/admin/form/Restaurant.vue'
import ProductForm from '../pages/admin/form/Product.vue';

import { guard } from './guard'

Vue.use(VueRouter)

//definitions des routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/connexion',
    name: 'Login',
    component: Login
  },
  {
    path: '/enregistrement',
    name: 'Register',
    component: Register
  },
  {
    path: '/profil',
    name: 'Profile',
    component: Profile
  },
  //route administrateur
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../pages/admin/AdminLayout.vue'),
    children: [
      {
        name: "Dashboard",
        path: 'dashboard',
        component: Dashboard
      },
      {
        name: "Customers",
        path: 'clients',
        component: Customers
      },
      {
        name: "Restaurants",
        path: 'restaurants',
        component: Restaurants
      },
      {
        path: 'ajouter-restaurant',
        name: 'RestaurentCreate',
        component: RestaurantForm
      },
      {
        name: "Products",
        path: 'menus',
        component: Products
      },
      {
        name: "ProductsCreate",
        path: 'ajouter-menu',
        component: ProductForm
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

//protection des routes
router.beforeEach(guard);

export default router;
