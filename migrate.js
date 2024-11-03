import { load } from 'migrate';
import pg from '../sql.js'; // подключение к базе данных

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

      // Закрытие соединения с базой данных после завершения миграции
      try {
        await pg.end(); // Завершение соединения
      } catch (closeErr) {
        console.error('Ошибка при завершении соединения:', closeErr);
      }
    });
  }
);