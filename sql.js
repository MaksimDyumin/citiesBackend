import postgres from 'postgres'

const sql = postgres({ 
    host: "localhost",
    port: "5432",
    username: "postgresUser",
    password: "pgSuperSecretMnogaBycaBab",
    database: "population",
 }) 

export default sql