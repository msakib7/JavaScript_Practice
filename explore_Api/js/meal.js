console.log('Loading...');

const loadMeals = searchText => {
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    //console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data));
}

const displayMeals = meals => {
    const allMeals = meals.meals;
    const mealsContainer = document.getElementById('all-meals');
    //  console.log(allMeals[2]);
    mealsContainer.innerHTML = '';
    allMeals.forEach(meal => {
        // console.log(meal.strCategory);
        const mealDiv = document.createElement('div');
        const url = meal.strMealThumb;
        mealDiv.classList.add('meal');
        mealDiv.innerHTML = `
        <img class="thumbnil" src=${url}>
        <h3>Name: ${meal.strMeal}</h3>
        <p>Area: ${meal.strArea}</p>
        <button onclick="loadMealDetails(${meal.idMeal})"
            type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">Details
        </button>
        `
        mealsContainer.appendChild(mealDiv);

    });
}

const searchMeal= () => {
    const searchText = document.getElementById('search-element').value;
    // console.log(typeof(searchText))
    loadMeals(searchText);
    // console.log(searchText);
    document.getElementById('search-element').value = '';
}

const loadMealDetails = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]));
    // console.log(idMeal);
}
const displayMealDetails = meal => {
    document.getElementById('mealDetailsLabel').innerText = meal.strMeal;
    const mealDetails = document.getElementById('mealDetailsBody');
    mealDetails.innerHTML = `
    <img class="img-fluid" src="${meal.strMealThumb}">
    `

}

loadMeals('rice');


// 


// async await
// const loadMealDetail2 = async(idMeal) => {
//     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
//     try{
//         const res = await fetch(url);
//         const data = await res.json();
//         displayMealDetails(data.meals[0]);
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// 

