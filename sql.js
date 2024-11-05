import postgres from 'postgres';

// Замените на ваши переменные окружения, если используете их
const sql = postgres({ 
    host: process.env.DB_HOST || "postgresDB",  // Используйте имя сервиса postgresDB
    port: process.env.DB_PORT || 5432,
    username: process.env.DB_USER || "postgresUser",
    password: process.env.DB_PASSWORD || "pgSuperSecretMnogaBycaBab",
    database: process.env.DB_NAME || "population",  // Имя базы данных должно быть "population"
});

export default sql;