import {  getMe, list } from "../../services/customer-service";


//etat initial
const state = {
    customers: [],
    customersCount: 0,
    customer: null,
    error: false,
    loding : false
};


const getters = {
    customersCount(state) {
        return state.customersCount;
    },
    customers(state) {
        return state.customers;
    },
    customer(state) {
        return state.customer;
    },
};

const actions = {
    //recuperer le compte de l'utilisateur actuel
    customerMe(context) {
        return new Promise((resolve) => {
            getMe()
                .then((response) => {
                    context.commit("me", response.data);
                    resolve(response.data);
                })
                .catch((response) => {
                    context.commit("error", response.data);
                });
        });
    },
    //recuperer la list
    customerList(context) {
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
    me(state, customer) {
        state.customer = customer;
        state.error = false;
    },
    list(state, customers) {
        state.customers = customers;
        state.customersCount = customers.length;
        state.error = false;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};