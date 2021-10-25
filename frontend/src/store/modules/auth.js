import { login, signup, me } from "../../services/auth-service";
import jwtService from "../../services/jwt-service";


//etat initial
const state = {
    users: [],
    usersCount: 0,
    user: null,
    error: false,
    loding : false
};


const getters = {
    usersCount(state) {
        return state.usersCount;
    },
    users(state) {
        return state.users;
    },
    me(state) {
        return state.user;
    },
};

const actions = {
    //Connexion
    login(context, credentials) {
        return new Promise((resolve) => {
            login(credentials)
                .then((response) => {
                    context.commit("setAuth", response.data);
                    resolve(response.data);
                })
                .catch((response) => {
                    context.commit("setError", response.data);
                });
        });
    },
    //enregistrement de compte
    signup(context, credentials) {
        return new Promise((resolve) => {
            signup(credentials)
                .then((response) => {
                    context.commit("setAuth", response.data);
                    resolve(response.data);
                })
                .catch(({ response }) => {
                    context.commit("setError", response.data);
                });
        });
    },
    //decoonexion
    logout(context) {
        context.commit("purgeAuth");
    },
    //verification d'authentification
    checkAuth(context) {
        if (jwtService.getToken()) {
            me().then(({ data }) => {
                context.commit("setAuth", data.user);
            })
                .catch(({ response }) => {
                    context.commit("setAuth", response.data.errors);
                });
        } else {
            context.commit("purgeAuth");
        }
    },
};

const mutations = {
    setError(state) {
        state.error = true;
    },
    setAuth(state, user) {
        state.user = user;
        state.error = false;
        jwtService.saveToken(state.user);
    },
    purgeAuth(state) {
        state.user = null;
        state.error = false;
        jwtService.destroyToken();
    },
    loading(){
        state.loding = true
    },
    stopLoading(){
        state.loding = false
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};