import {  create, get, list } from "../../services/restaurant-service";


//etat initial
const state = {
    restaurants: [],
    restaurantsCount: 0,
    restaurant: null,
    error: false,
    loding : false
};


const getters = {
    restaurantsCount(state) {
        return state.restaurantsCount;
    },
    restaurants(state) {
        return state.restaurants;
    },
    restaurant(state) {
        return state.restaurant;
    },
};

const actions = {
    //creer 
    restaurantCreate(context, data) {
        return new Promise((resolve) => {
            create(data)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((response) => {
                    context.commit("error", response.data);
                });
        });
    },
    //recuperer
    restaurant(context, id) {
        return new Promise((resolve) => {
            get(id)
                .then((response) => {
                    context.commit("me", response.data);
                    resolve(response.data);
                })
                .catch((response) => {
                    context.commit("error", response.data);
                });
        });
    },
    //recuperer la liste
    restaurantList(context) {
        return new Promise((resolve) => {
            list()
                .then((response) => {
                    context.commit("list", response.data);
                    resolve(response.data);
                })
                .catch((response) => {
                    context.commit("error", response.data);
                });
        });
    },
};

const mutations = {
    error(state) {
        state.error = true;
    },
    me(state, restaurant) {
        state.restaurant = restaurant;
        state.error = false;
    },
    list(state, restaurants) {
        state.restaurants = restaurants;
        state.restaurantsCount = restaurants.length;
        state.error = false;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};