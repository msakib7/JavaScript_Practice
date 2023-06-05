console.log('loading');
const loadPhone = (searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhone(data.data, dataLimit)); 
}

const displayPhone = (phones, dataLimit) =>{
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerText = '';
    console.log(dataLimit);
    const seeAll = document.getElementById('see-All-Btn');
    if( dataLimit && phones.length > 10) {
        phones = phones.slice(0,10);
        seeAll.classList.remove('d-none');
    }
    else {
        seeAll.classList.add('d-none');
    }

    const noPhone = document.getElementById('no-phone-found');
    if(phones.length === 0){
        noPhone.classList.remove('d-none');
    }
    else{
        noPhone.classList.add('d-none');
    }
    phones.forEach(phone =>{
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
            <div class="card">
                <img src="${phone.image}" class="card-img-top p-2" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${phone.phone_name}</h5>
                  <p>${phone.brand}</p>
                  <button onclick="showDetails(${phone.slug})" type="button" class="btn btn-primary w-100">Details</button>
                </div>
            </div>
        `;
        phoneContainer.appendChild(phoneDiv);
    }) 
    toggleSpinner(false);
}

    // display section
const processLoad = (dataLimit) => {
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhone(searchText, dataLimit);
}
const showDetails = (id) => {
    const modalField = document.getElementById('details-modal');
    
}


    // buttonsection 

document.getElementById('search-btn').addEventListener('click', function(){
    processLoad(10);
});
document.getElementById('see-All-Btn').addEventListener('click', function() {
    processLoad();
});


    // extra feature

const toggleSpinner = isloading => {
    const loaderSection = document.getElementById('loader');
    if(isloading){
        loaderSection.classList.remove('d-none');
    }
    else{
        loaderSection.classList.add('d-none'); 
    }
};


