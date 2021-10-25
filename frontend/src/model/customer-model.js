class CustomerModel{
   
    constructor( id, firstName, lastName, email, phone, addresses, user){
        this.id = id;
        this.firstName =  firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.addresses = addresses;
        this.user = UserModel(user);
    }

    getType(){
        this.type == "admin" ? "Administrateur" : "Client";
    }
}

