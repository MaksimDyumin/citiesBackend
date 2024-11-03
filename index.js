import express from 'express'
import pg from "./sql.js"
import cors from 'cors';


const app = express()
app.use(cors())

app.get('/peoples', async function (req, res) {
    const result = {};

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
                c2.id AS countryId, 
                c2."name" AS countryName
            FROM 
                peoples p
            LEFT JOIN streets s ON s.id = p.street_id 
            LEFT JOIN districts d ON d.id = s.districts_id 
            LEFT JOIN citys c ON c.id = d.citys_id 
            LEFT JOIN countrys c2 ON c2.id = c.country_id
        `;

        for (let value of sqlResult) {
            const countryName = value.countryname || 'Неуказанно';
            if (!result[countryName]) {
                result[countryName] = {};
            }

            const cityName = value.cityname || 'Неуказанно';
            if (!result[countryName][cityName]) {
                result[countryName][cityName] = {};
            }

            const districtName = value.districtname || 'Неуказанно';
            if (!result[countryName][cityName][districtName]) {
                result[countryName][cityName][districtName] = {};
            }

            const streetName = value.streetname || 'Неуказанно';
            if (!result[countryName][cityName][districtName][streetName]) {
                result[countryName][cityName][districtName][streetName] = {};
            }

            const homeName = value.home || 'Неуказанно';
            if (!result[countryName][cityName][districtName][streetName][homeName]) {
                result[countryName][cityName][districtName][streetName][homeName] = [];
            }

            result[countryName][cityName][districtName][streetName][homeName].push(value);
            result[countryName]['countryid'] = value.countryid
            result[countryName][cityName]['cityId'] = value.cityid
            result[countryName][cityName][districtName]['districtId'] = value.districtid
            result[countryName][cityName][districtName][streetName]['streetid'] = value.streetid
        }
        res.send(result);
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
        res.status(500).send({ error: 'Произошла ошибка при получении данных' });
    }
});

app.listen(3000)