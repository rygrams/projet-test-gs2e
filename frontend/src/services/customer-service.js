import Vue from "vue";

export const get = (id)=>{
    return Vue.axios.get("customers/"+id);
}

export const getMe = ()=>{
    return Vue.axios.get("customers/me");
}

export const list = ()=>{
    return Vue.axios.get("customers/");
    
}

export const update = (id, data)=>{
    return Vue.axios.post("customers/"+id, data);
    
}

export const remove = (id)=>{
    return Vue.axios.remove("customers/"+id);
    
}