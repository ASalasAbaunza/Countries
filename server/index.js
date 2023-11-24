const axios = require("axios");
const server = require("./src/server");
const { conn, Country } = require('./src/db.js');

const PORT = 3001;

const dbCreation = async () => {
  try {
    let res = await axios.get('http://localhost:5000/countries');
    if (res.data.error) {
      console.log(res.data.error.message);
    } else {
      var countries = res.data;
      var updatedCountries = countries.map((country) => {
        let { cca3, name, flags, continents, capital, subregion, area, population } = country;
        const id = cca3;
        name = name.common;
        const flag = flags.png;
        continent = continents[0];
        if (capital) {
          capital = capital[0];
        } else {
          capital = 'Non-existent';
        }
        const countrySum = { id, name, flag, continent, capital, subregion, area, population };
        return countrySum;
      });
      await Country.bulkCreate(updatedCountries);
      return 'Database created successfully';
    }
  } catch (error) {
    return ({error: error.message});
  }
}

conn.sync({ force: true })
  .then(async () => {
    const res = await dbCreation();
    console.log(res);
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    })
  })
  .catch(error => console.error(error))
