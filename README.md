# Приложение на Express.js с PostgreSQL

Это приложение на Express.js использует PostgreSQL в качестве базы данных. Оно контейнеризовано с помощью Docker и Docker Compose для простоты развертывания.

## Установка и запуск

### Предварительные требования

- Убедитесь, что у вас установлены следующие программы:
  - [Git](https://git-scm.com/)
  - [Docker](https://www.docker.com/get-started)
  - [Docker Compose](https://docs.docker.com/compose/)

### Шаги для запуска приложения

1. **Клонируйте репозиторий**

   В командной строке выполните следующую команду:

   ```bash
   git clone https://github.com/MaksimDyumin/citiesBackend.git

2. **Используйте команду запуска докера**

   Перейти в папку проекта:

   ```bash
   cd citiesBackend

3. **Используйте команду запуска докера**

   В командной строке выполните следующую команду:

   ```bash
   docker-compose up -d

4. **Откройте приложение по ссылке**

   Приложение будет доступно по ссылке:

   ```bash
   http://localhost:3000/