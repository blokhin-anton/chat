import Table from './app/baseLogic/Table';
import User from './app/user/user';

let user = new User('login', 'pass');
let user2 = new User('login2', 'pass2');

let table = new Table(11, 21);
table.appendUser(user);
table.appendUser(user2);
table.init();