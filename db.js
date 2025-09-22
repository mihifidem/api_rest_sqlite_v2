const sqlite3 = require('sqlite3');
const path = require('path');
const db = new sqlite3.Database(path.resolve(__dirname,'database.db'));

db.serialize(()=>{
    db.run(`
            create table if not exists tasks(
              id integer primary key autoincrement,
              title text not null,
              description text,
              done integer default 0)
        `);

});

module.exports = db;