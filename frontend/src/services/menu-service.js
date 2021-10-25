import Vue from "vue";

export const create = (data)=>{
    return Vue.axios.post("products/", data);
}

export const get = (id)=>{
    return Vue.axios.get("products/"+id);
}


export const list = ()=>{
    return Vue.axios.get("products/");
}


export const update = (id, data)=>{
    return Vue.axios.post("products/"+id, data);
    
}

export const remove = (id)=>{
    return Vue.axios.delete("products/"+id);  
}