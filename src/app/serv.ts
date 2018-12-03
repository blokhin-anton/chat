import User from './user/user';

class Serv {
    async getUserAction(userId: number): Promise<Object> {
        return new Promise(resolve => {
            setTimeout(() => {
                // переведёт промис в состояние fulfilled с результатом "result"
                resolve("action_" + userId);
              }, 1000);
        });
    }
}

/*let test = new Serv();
console.log(test.sayHi());*/

export default Serv;
