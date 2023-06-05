const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}

const displayCountry = countries => {
   const countriesContainer = document.getElementById('all-country');

   countries.forEach(country => {
    const countryDiv = document.createElement('div');
    countryDiv.classList.add('country');
    countryDiv.innerHTML = `
    <h3> Name: ${country.name.common}</h3>
    <p>Capital: ${country.capital ? country.capital : 'No Capital'}</p>
    <button onclick="displayCountryDetails('${country.cca2}')">Details</button>
    `
    countriesContainer.appendChild(countryDiv);
   });
}

const displayCountryDetails = code => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetails(data[0]));
}
const showCountryDetails = country => {
    const detailContainer = document.getElementById('country-details');
    detailContainer.innerHTML = `
    <h3>Name: ${country.name.common}</h3>
    <img src=${country.flags.png}>
    `
}

loadCountry();