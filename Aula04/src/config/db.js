
import Database from 'better-sqlite3';

const db = new Database('banco.db', {
    verbose: console.log,
    timeout: 10000
});

export function select(filter) {
    const stm = db.prepare('SELECT * FROM users');
    const result = stm.all(); // multiplos resultados []
    return result;
}
