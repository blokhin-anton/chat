import User from './user/user';

class Serv {
    public user: User;
    constructor() {
        this.user = new User('login', 'pass');
    }

    sayHi() {
        return 'Hello, ' + this.user.getLogin();
    }
}

let test = new Serv();
console.log(test.sayHi());