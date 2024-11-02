'use strict'
import pg from "../sql.js"

export async function up (next) {
  try {
    await pg`CREATE TABLE districts (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      citys_id integer
    )`
    next()
  } catch (err) {
    console.error('Ошибка при выполнении миграции UP:', err);
    next(err);
  } 
}

export async function down (next) {
  try {
    await db.query(`DROP TABLE districts`);
    next();
  } catch (err) {
    console.error('Ошибка при выполнении миграции DOWN:', err);
    next(err);
  }
}
