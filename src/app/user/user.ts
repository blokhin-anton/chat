import Hand from './hand';
class User {
    private login: string;
    private password: string;
    private hand: Hand;
    private id: number;
    constructor(id: number, login: string, password: string) {
        this.login = login;
        this.password = password;
        this.hand = new Hand();
        this.id = id;
    }

    getId(): number {
        return this.id;
    }
    
    getLogin(): string {
        return this.login;
    }

    getHand(): Hand {
        return this.hand;
    }
}

export default User;