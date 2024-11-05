import express from 'express';
import pg from './sql.js';
import cors from 'cors';
import path from 'path';
import morgan from 'morgan';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(morgan('dev'));

app.get('/peoples', async function (req, res) {
    try {
        const sqlResult = await pg`
            SELECT 
                p."name" AS personName, 
                p.home, 
                s.id AS streetId, 
                s."name" AS streetName, 
                d.id AS districtId, 
                d."name" AS districtName, 
                c.id AS cityId, 
                c."name" AS cityName,
                c."data" AS cityData,
                c2.id AS countryId, 
                c2."name" AS countryName
            FROM 
                peoples p
            LEFT JOIN streets s ON s.id = p.street_id 
            LEFT JOIN districts d ON d.id = s.districts_id 
            LEFT JOIN citys c ON c.id = d.citys_id 
            LEFT JOIN countrys c2 ON c2.id = c.country_id
        `;
        res.send(sqlResult);
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
        res.status(500).send({ error: 'Произошла ошибка при получении данных' });
    }
});

app.use('/', express.static(path.join(__dirname, '.', 'frontend', 'dist')));

app.listen(3000, () => {
    console.log('Сервер запущен на http://localhost:3000');
});