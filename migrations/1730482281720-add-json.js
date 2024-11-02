'use strict'
import pg from "../sql.js"

export async function up (next) {
  try {
    await pg``
    next()
  } catch (err) {
    console.error('Ошибка при выполнении миграции UP:', err);
    next(err);
  } 
}

export async function down (next) {
  try {
    await db.query(``);
    next();
  } catch (err) {
    console.error('Ошибка при выполнении миграции DOWN:', err);
    next(err);
  }
}
