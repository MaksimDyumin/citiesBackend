#!/bin/bash

set -e

echo "Запуск миграций..."
node migrate.js


echo "Запуск приложений..."
node index.js

echo "Оба скрипта выполнены успешно."