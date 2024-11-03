import fs from "node:fs";

const citiesTree = JSON.parse(fs.readFileSync("./json/citiesTree.json").toString());
const cities = JSON.parse(fs.readFileSync("./json/cities.json").toString());

const citiesValues = cities.map(city => [city.name]);

const districts = [];
const streets = [];
const citizens = [];

let cityIndex = 1;
let districtIndex = 1;
let streetIndex = 1;

for (const city of citiesTree) {
  for (const district of city.districts) {
    districts.push({ name: district.name, cityId: cityIndex });
    for (const street of district.streets) {
      streets.push({ name: street.name, districtId: districtIndex });
      for (const citizen of street.citizens) {
        citizens.push({ name: citizen.name, streetId: streetIndex });
      }
      streetIndex++;
    }
    districtIndex++;
  }
  cityIndex++;
}

const districtsValues = districts.map(d => [d.name, d.cityId]);
const streetsValues = streets.map(s => [s.name, s.districtId]);
const citizensValues = citizens.map(c => [c.name, c.streetId]);

export default { citiesValues, districtsValues, streetsValues, citizensValues };