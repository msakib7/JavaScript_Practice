
//console.log(url);
const loadData = async(code) => {
    console.log(code);
    const url = `https://restcountries.com/v3.1/region/${code}`;
    try{
        const res = await fetch(url);
        const data = await res.json();
        displayCountry(data);
        //console.log(data);
    }
    catch(error){
        console.log(error);
    }
}

const displayCountry = data => {
    const countryContainer = document.getElementById('all-country');
    countryContainer.innerHTML = '';

    data.forEach(country => {
        const url = country.flags.png;
        console.log(url);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <img class="img-fluid p-2" src=${url}>
            <h3>Name: ${country.name.common} </h3>
            <p>Capital: ${country.capital ? country.capital : 'No Capital'}</p>
        `;
        console.log(country);
        countryContainer.appendChild(countryDiv);   
    });


}
function loadContinent(continent) {
    document.getElementById('continent-name').innerText = continent;
    loadData(continent);
} 

loadData('asia');