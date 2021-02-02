// rappel : en javascript, les fonctions sont des objets. La notion de classe
// n'existe pas rééllement (il s'agit de "sucre syntaxique").

const { EventEmitter } = require('events');

class Subject extends EventEmitter {}

class User extends Subject {
  constructor({ username, email }) {
    super();
    this._username = username;
    this._email = email;
  }

  get username() {
    return this._username;
  }

  get email() {
    return this._email;
  }

  set username(username) {
    this._username = username;
    this.emit('update', { username });
  }

  set email(email) {
    this._email = email;
    this.emit('update', { email });
  }
}

const toto = new User({
  username: 'toto',
  email: 'toto@toto.com'
});

toto.on('update', ({ username = null, email = null }) => {
  console.log(`Toto was updated ! Values set : username=${username}, email=${email}`);
});

toto.username = 'titi';
toto.email = 'titi@titi.com';
