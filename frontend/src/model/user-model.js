class UserModel{
   
    constructor(id, email, password, type){
        this.id = id;
        this.email = email;
        this.password = password;
        this.type = type;
    }

    getType(){
        this.type == "admin" ? "Administrateur" : "Client";
    }
}