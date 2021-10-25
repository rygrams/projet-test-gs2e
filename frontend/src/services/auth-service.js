import Vue from "vue";

//connexion
export const login = (data) => {
   return Vue.axios.post("users/login", data);
}

//creation de compte
export const signup = async (data) => {
   return Vue.axios.post("users/signup", data);
}

//recuperation de lutisateur actuel
export const me = () => {
   return Vue.axios.get("users/me");
}