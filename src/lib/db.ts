import Database from 'better-sqlite3';
import { resolve } from 'path';

const db = new Database(resolve('./shopping.db'), { verbose: console.log });

db.exec(`
    CREATE TABLE IF NOT EXISTS shopping_list (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        item TEXT NOT NULL,
        completed INTEGER DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS history (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        item TEXT NOT NULL,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    );
`);

export default db;