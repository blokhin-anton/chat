import User from './user/user';

class Serv {
    constructor() {

    }

    async getUserAction(userId: number): Promise<Object> {
        await new Promise(
            (resolve) => setTimeout(resolve, 5000)
        );
        console.log('run promise' + userId);
        return "action_" + userId;
    }
}

export default Serv;
