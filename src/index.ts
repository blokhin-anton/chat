import Table from './app/baseLogic/Table';
import User from './app/user/user';
import Serv from './app/serv';
import Game from './app/logic/Game';


let user = new User(1, 'login', 'pass');
let user2 = new User(2, 'login2', 'pass2');

let table = new Table(11, 21);
table.appendUser(user);
table.appendUser(user2);
// table.init();
let serv = new Serv();
let game: Game = new Game(table, serv);
game.start();