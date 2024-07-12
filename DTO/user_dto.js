

class User_dto{
    name;
    surname;
    email;
    id;
    univ;

    constructor(model) {
        this.name = model.name;
        this.email = model.email;
        this.id = model.id;
        this.surname = model.surname;
        this.univ = model.univ;
    }
}

module.exports = User_dto;