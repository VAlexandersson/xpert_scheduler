import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./db.sqlite');


db.serialize(() => {
});

export default db;
