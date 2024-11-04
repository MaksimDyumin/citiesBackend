import fs from 'node:fs';


async function runMigrationsAndStartApp() {
  try {
    const isAlreadyMigrated = fs.existsSync('./migrations/.migrate');

    if (!isAlreadyMigrated) {
      await import('./migrate.js');
      console.log('Миграции успешно выполнены.');
    } else {
      console.log('Миграции уже были выполнены ранее.');
    }
    await import('./index.js');
  } catch (err) {
    console.error('Ошибка при выполнении миграций:', err);
    process.exit(1);
  }
}

runMigrationsAndStartApp();