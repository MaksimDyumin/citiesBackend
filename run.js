// run.js
import './migrate.js' // выполняет миграции, экспортируя функцию

async function runMigrationsAndStartApp() {
  try {
    await import('./migrate.js'); // ждем выполнения миграций
    console.log('Миграции успешно выполнены.');
    await import('./index.js'); // Запускаем index.js после завершения миграций
  } catch (err) {
    console.error('Ошибка при выполнении миграций:', err);
    process.exit(1); // Завершаем процесс с кодом ошибки
  }
}

runMigrationsAndStartApp();