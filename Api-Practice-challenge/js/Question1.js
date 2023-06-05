const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
        {
            name: {
                common: "John",
                fullName: ["John", "Doe"]
            },
            age: 32,
            isMale: false,
            address: {
                street: "13/A St Joseph",
                house: 10,
            },
        },
        {
            name: {
                common: "Humayoun",
                fullName: ["Humayoun", "Kabir"]
            },
            age: 33,
            isMale: false,
            address: {
                street: "13/A St Lucia",
                house: 11,
            },
        },
    ]
};

//console.log(person.result[0].name);
const loadAllPersone = () => {
    
    document.getElementById('persone-name1').innerText = person.result[0].name.common;
    document.getElementById('persone-age1').innerText = person.result[0].age;
    document.getElementById('persone-address1').innerText = person.result[0].address.street +' House No: '+ person.result[0].address.house;

    document.getElementById('persone-name2').innerText = person.result[1].name.common;
    document.getElementById('persone-age2').innerText = person.result[1].age;
    document.getElementById('persone-address2').innerText = person.result[1].address.street +' House No: '+ person.result[1].address.house;
    
}

loadAllPersone();