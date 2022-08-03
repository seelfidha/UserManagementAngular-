

export class User {
    id : Number;
    name : String;
    email : String;
    gender : String ;
    status : String;

    constructor(id, name, email, gender, status){
        this.id = id;
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.status = status;
    }
}