import { load } from 'migrate';
import pg from './sql.js';
import fs from 'node:fs';


function migrate() {
  try {
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
  } catch (error) {
  }
}

const isAlreadyMigrated = fs.existsSync('./migrations/.migrate');
if (!isAlreadyMigrated) {
  migrate()
} else {
  console.log('Миграции уже были выполнены')
}



