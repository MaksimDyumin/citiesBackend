import { load } from 'migrate'
import express from 'express'
import pg from "./sql.js"

const app = express()

load({
    stateStore: './migrations/.migrate',
    migrationsDirectory: './migrations',
}, function (err, set) {
    if (err) {
        throw err
    }
    set.up(function (err) {
        if (err) {
            throw err
        }
        console.log('migrations successfully ran')
    })
})

app.get('/peoples', async function (req, res) {
    const result = {}

    const sqlResult = await pg`select p."name", p.home, s.id as streetId, s."name" as streetName, d.id as districtId, d."name" as districtName, c.id cityId, c."name" as cityName, c2.id as countryId, c2."name" as countryName
        from peoples p
        left join streets s on s.id = p.street_id 
        left join districts d on d.id = s.districts_id 
        left join citys c on c.id = d.citys_id 
        left join countrys c2 on c2.id = c.country_id`
    res.send(result)
})

app.listen(3000)