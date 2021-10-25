import {  create, get, list } from "../../services/menu-service";


//etat initial
const state = {
    menus: [],
    menusCount: 0,
    menu: null,
    error: false,
    loding : false
};


const getters = {
    menusCount(state) {
        return state.menusCount;
    },
    menus(state) {
        return state.menus;
    },
    menu(state) {
        return state.menu;
    },
};

const actions = {
    //creer 
    menuCreate(context, data) {
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
    menu(context, id) {
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
    menuList(context) {
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
    me(state, menu) {
        state.menu = menu;
        state.error = false;
    },
    list(state, menus) {
        state.menus = menus;
        state.menusCount = menus.length;
        state.error = false;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};