# Указываем базовый образ с Node.js 
FROM node:18

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь код вашего приложения в контейнер
COPY . .

# Делаем run_scripts.sh исполняемым
RUN chmod +x run_scripts.sh

# Указываем порт, который будет использовать приложение
EXPOSE 3000

# Запускаем скрипт для старта приложения
CMD ["./run_scripts.sh"]