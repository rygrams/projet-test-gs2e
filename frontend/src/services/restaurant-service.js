import Vue from "vue";

export const create = (data)=>{
    console.log(data);
    return Vue.axios.post("restaurants/", data);
}

export const get = (id)=>{
    return Vue.axios.get("restaurants/"+id);
}


export const list = ()=>{
    return Vue.axios.get("restaurants/");
    
}


export const update = (id, data)=>{
    return Vue.axios.post("restaurants/"+id, data);
    
}

export const remove = (id)=>{
    return Vue.axios.delete("restaurants/"+id);
    
}