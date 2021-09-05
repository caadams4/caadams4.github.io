

interface User {
    //declare interface w/ properties STR and NUM
    name: string,
    id: number,
}

/*
const user: User = {
    name: "Charles",
    id: 1,
};
*/

class createUser {
    name: string;
    id: number;

    constructor(name:string,id:number) {
        this.name = name;
        this.id = id;
    }
}

const user: User = new createUser("Murphy", 1);
