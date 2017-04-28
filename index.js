
"use strict";


  const sqlite = require('sqlite-cipher');
  const knex = require('knex')
  ({
  client: 'sqlite3',
  connection: {
    filename: "./test-db.sqlite"
  }
});


/*

Assuming the sqlite db is in the directory "./test-db.sqlite" and decrypted.sqlite
and encrypted.sqlite are empty files , then uncommenting the first line of code will encrypt the
db into "./encrypted.sqlite" with the password "GSD"(abbreviation for German Shepherd dog),
just to know :P .
To decrypt again the db uncomment second line of code .

encrypt() - decrypt() arguements . (from(file), to(file), password, algorithm)

Note : See supported algorithms if you want to use another algorithm
*/


//sqlite.encrypt("test-db.sqlite","encrypted.sqlite", "GSD","aes-256-ctr");
//sqlite.decrypt("encrypted.sqlite","decrypted.sqlite", "GSD","aes-256-ctr");
