'use strict'
import pg from "../sql.js"

export async function up (next) {
  try {
    await pg`CREATE TABLE streets (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      districts_id integer
    )`
    next()
  } catch (err) {
    console.error('Ошибка при выполнении миграции UP:', err);
    next(err);
  } 
}

export async function down (next) {
  try {
    await db.query(`DROP TABLE streets`);
    next();
  } catch (err) {
    console.error('Ошибка при выполнении миграции DOWN:', err);
    next(err);
  }
}
