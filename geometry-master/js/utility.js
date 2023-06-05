function getElementByValue(elementValue) {
    const valueOfInput = document.getElementById(elementValue);
    const valueOfInputString = valueOfInput.value;
    const currentValue = parseFloat(valueOfInputString);
    valueOfInput.value = '';
    return currentValue;

}
function setElementByClick(elementId) {
    const setElement = document.getElementById(elementId);
    return setElement;
} 
function eventBubble(count, area, innerText){
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${count}</td>
      <p class='mx-3'>${innerText}</P>
      <td>${area.toFixed(2)}</td>
      <p>cm<sup>2</sup></p>
      <td>
      <button class='btn btn-primary mx-3'>Convert</button>
      </td>
    `;
    return tr;
}

// color generates
function generateRandomColor() {
    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  
    return randomColor;
  }
  
  function setRandomColorOnHover(element) {
    element.addEventListener('mouseover', function() {
      const randomColor = generateRandomColor();
      element.style.backgroundColor = randomColor;
    });
  
    element.addEventListener('mouseout', function() {
      element.style.backgroundColor = '';
    });
  }
  
