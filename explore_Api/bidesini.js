const  loadData = () =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayQuote(data));
}

const displayQuote = users => {
    const nameTag = document.getElementById('name');
    const genderTag = document.getElementById('gender');
    genderTag.innerHTML = users.results[0].gender;
    
    nameTag.innerHTML = users.results[0].name.title + ' ' + users.results[0].name.first +' ' + users.results[0].name.last;



    // console.log(users.results[0].gender);



    console.log('loading');
}

loadData();