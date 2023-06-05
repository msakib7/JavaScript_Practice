function generatePin(){
    const random = Math.round(Math.random()*10000);
    const randomString = random+'';
    if(randomString.length != 4 )
    {
        return generatePin();
    }
    const finalPin = parseInt(randomString);
    return finalPin;
}
function setInputFieldValue(fieldId, setValue){
    const inputField = document.getElementById(fieldId);
    inputField.value = setValue;
}

document.getElementById('btn-generate-pin').addEventListener('click',function(){
    const number = generatePin();
    
     setInputFieldValue('display-pin-field',number);
})

document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('typed-number');
    const previousTypedNumber = typeNumberField.value;
    if(isNaN(number)){
        if(number == 'C')
        {
            typeNumberField.value = '';
        }
        else if(number == '<')
        {
            const digits = previousTypedNumber.split('');
            console.log(digits);
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
        }
    }
    else
    { 
        typeNumberField.value += number;
    }
})

document.getElementById('btn-submit').addEventListener('click',function(){
    const generatedPinField = document.getElementById('display-pin-field');
    const generatedPin = generatedPinField.value;

    const typeField = document.getElementById('typed-number');
    const typedPin = typeField.value; 

    const pinSuccessField = document.getElementById('pin-success');
    const pinFaieldField = document.getElementById('pin-faild');
    if(generatedPin === typedPin)
    {
        pinFaieldField.style.display = 'none';
        pinSuccessField.style.display = 'block';
    }
    else
    {

        pinSuccessField.style.display = 'none';
        pinFaieldField.style.display = 'block';
    }

})

