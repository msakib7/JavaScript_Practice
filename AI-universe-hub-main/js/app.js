let sortToken = 1;
let seeAllToken = 1;
const loadData = () => {
    toggleSpinner(true);
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTools(data.data.tools));
}

const displayTools = datas => {
    const displayContainer = document.getElementById('service-card');
    let count = 0;

    if(sortToken === 0) {
      sortArrayOfObjects(datas, "published_in");
      displayContainer.innerHTML = '';
    }

    if(seeAllToken === 1) {
      datas = datas.slice(0,6);
      // console.log(datas);
    }
    else {
      displayContainer.innerHTML = '';
    } 


    datas.forEach(data => {
        // console.log(data);
        
        count++;
        const toolDiv = document.createElement('div');
        toolDiv.classList.add('tool');
        toolDiv.innerHTML = `
        <div class="col h-100">
          <div class="card">
            <img src="${data.image}" class="card-img-top rounded-3 img" alt="...">
            <div class="card-body">
              <h5 class="card-title">Features</h5>
              <ul>
                <li>${data.features[0]}</li>
                <li>${data.features[1]}</li>
                <li>${data.features[2]}</li>
              </ul>
            </div>
            <div class="card-footer d-flex justify-content-between align-items-center"> 
                <div>
                  <h5 class="card-title">${data.name}</h5>
                  <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-week" viewBox="0 0 16 16">
                    <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                    </svg></i> ${data.published_in}
                  </p>
                </div>
                <div>
                    <button onclick="loadDetails(${data.id})" type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modal-field"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                  </svg></button> 
                </div>
            </div>
          </div>
        </div>
        `
        displayContainer.appendChild(toolDiv); 
         
    });
    toggleSpinner(false);
}

// sorting 
const sortArrayOfObjects = (arr, propertyName, order = 'ascending') => {
  const sortedArr = arr.sort((a, b) => {
    if (a[propertyName] < b[propertyName]) {
      return -1;
    }
    if (a[propertyName] > b[propertyName]) {
      return 1;
    }
    return 0;
  });

  if (order === 'descending') {
    return sortedArr.reverse();
  }
  return sortedArr;
};


const toggleSpinner = isloading => {
    const loaderSection = document.getElementById('toggler-section');
    if(isloading){
        loaderSection.classList.remove('d-none');
    }
    else{
        loaderSection.classList.add('d-none'); 
    }
};

const loadDetails = (id) => {
  let url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;

  if(id < 10) {
     url = `https://openapi.programming-hero.com/api/ai/tool/0${id}`;
  }
  fetch(url)
  .then(res => res.json())
  .then(data => displayDetails(data.data));
}
const displayDetails = (data) => {
  console.log(data.input_output_examples[0].input);
  const detailsDiv = document.getElementById('modal-info');
  console.log(detailsDiv);
  detailsDiv.innerHTML = `
    <div class="row row-cols-2 p-2">
       <div class="col border border-warning rounded-3">
         <p class="text-center">${data.description}</p>
         <h4>Integrations</h4>
         <ul>
         <li>${data.integrations[0]}</li>
         <li>${data.integrations[1]}</li>
         <li>${data.integrations[2]}</li>
         </ul>
       </div>

       <div class="col">
         <div>
          <img src="${data.image_link[0]}" class="img-fluid rounded-3">
         </div>
         <div class="text-center ">
          <h3>${data.input_output_examples[0].input}</h3>
          <p>${data.input_output_examples[0].input}</p>
          
         </div>
       </div>
    </div>
  `
}



document.getElementById('btn-sort').addEventListener('click', function() {
    sortToken = 0;
    loadData();
})
document.getElementById('btn-seeall').addEventListener('click', function() {
  seeAllToken = 0;
  loadData();
})



loadData();