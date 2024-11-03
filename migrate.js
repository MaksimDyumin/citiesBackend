import { load } from 'migrate';
import pg from './sql.js';

load(
  {
    stateStore: './migrations/.migrate',
    migrationsDirectory: './migrations',
  },
  function (err, set) {
    if (err) {
      throw err;
    }
    set.up(async function (err) {
      if (err) {
        throw err;
      }
      console.log('Migrations successfully ran');
      try {
        await pg.end()
      } catch (closeErr) {
        console.error('Ошибка при завершении соединения:', closeErr);
      }
    });
  }
);