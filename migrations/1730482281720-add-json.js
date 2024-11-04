'use strict';
import pg from "../sql.js";
import parsedData from '../parseData.js';

export async function up(next) {
  try {
    await pg.begin(async sql => {
      if (parsedData.citiesValues.length > 0) {
        await sql`
          INSERT INTO citys (name, data) VALUES ${sql(parsedData.citiesValues)}
        `;
      }

      if (parsedData.districtsValues.length > 0) {
        await sql`
          INSERT INTO districts (name, citys_id) VALUES ${sql(parsedData.districtsValues)}
        `;
      }

      if (parsedData.streetsValues.length > 0) {
        await sql`
          INSERT INTO streets (name, districts_id) VALUES ${sql(parsedData.streetsValues)}
        `;
      }

      if (parsedData.citizensValues.length > 0) {
        await sql`
          INSERT INTO peoples (name, street_id) VALUES ${sql(parsedData.citizensValues)}
        `;
      }
    });

    console.log("Data inserted successfully in migration UP");
    next();
  } catch (err) {
    console.error("Ошибка при выполнении миграции UP:", err);
    next(err);
  }
}

export async function down(next) {
  try {
    await pg.begin(async sql => {
      await sql`DELETE FROM peoples`;
      await sql`DELETE FROM streets`;
      await sql`DELETE FROM districts`;
      await sql`DELETE FROM citys`;
    });

    console.log("Data removed successfully in migration DOWN");
    next();
  } catch (err) {
    console.error("Ошибка при выполнении миграции DOWN:", err);
    next(err);
  }
}