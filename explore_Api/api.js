const user = {id:01, name:'Sakib',job:'Web Devloper'};
// console.log(user);
const stringified = JSON.stringify(user);
// console.log(stringified);

const company = {

    name: 'SantirHaat',
    address:{
        village: 'Khatial',
        district: 'Madaripur',
        country: 'BD'
    },
    type: 'IT Company',
    holder: '23',
    product: ['Mobile App','Web App','Games']
}
// console.log(company);
const companyString = JSON.stringify(company);
console.log(companyString);
const companyObj = JSON.parse(companyString);
console.log(companyObj);