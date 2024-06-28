

class User_dto{
    name;
    surname;
    email;
    id;

    constructor(model) {
        this.name = model.name;
        this.email = model.email;
        this.id = model.id;
        this.surname = model.surname;
    }
}

module.exports = User_dto;