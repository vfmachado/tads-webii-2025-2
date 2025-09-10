import Database from 'better-sqlite3';

const db = new Database('banco.db', {
    verbose: console.log,
    timeout: 10000
});

const selectFromDb = () => {
    const stm = db.prepare('SELECT * FROM users');
    const result = stm.all(); // multiplos resultados []
    console.log({ result });
}

const selectByEmail = (email) => {
    const stm = db.prepare('SELECT * FROM users WHERE email = ?');
    const result = stm.get(email); // apenas 1 resultado ou undefined
    console.log({ result });    
}

const insereUser = (user) => {
    // como temos colunas com valores padrao (id e created_at), precisamos identificar as colunas que vamos inserir 
    const stmt = db.prepare(`
        INSERT INTO users (name, email, password, status, role)
        VALUES (@name, @email, @password, @status, @role)`);
    const result = stmt.run(user);
    console.log({ result });    // numero de registros modificados
}

// selecionar todos
// selectFromDb();

// select by email
selectByEmail('vini@gmail.com');

// select by email - nao existente (undefined)
selectByEmail('naoexiste@email.com');

// cadastra usuario
const user = {
    name: 'Ronaldo',
    email: 'ronaldo@aldo.com',
    password: 'ronaldo',
    status: 'ENABLED',
    role: 'CLIENT'
}
// insereUser(user);

selectFromDb();