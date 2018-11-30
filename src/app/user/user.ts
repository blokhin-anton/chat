import Hand from './hand';
class User {
    private login: string;
    private password: string;
    private hand: Hand;
    constructor(login: string, password: string) {
        this.login = login;
        this.password = password;
        this.hand = new Hand();
    }

    public getLogin = () => {
        return this.login;
    }

    getHand(): Hand {
        return this.hand;
    }
}

export default User;