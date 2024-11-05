import postgres from 'postgres';

const sql = postgres({ 
    host: process.env.DB_HOST || "postgresDB",
    username: process.env.DB_USER || "postgresUser",
    password: process.env.DB_PASSWORD || "pgSuperSecretMnogaBycaBab",
    database: process.env.DB_NAME || "population",
});

export default sql;