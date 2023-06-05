// addEventListener for triangle
let count = 0;
document.getElementById('btn-calculation-1').addEventListener('click', function () {
    count += 1;
    const baseInput = getElementByValue('base-input');
    const heightInput = getElementByValue('height-input');
    let areaTriangle;
    // validation
    if (typeof baseInput === "number" && !isNaN(baseInput) && baseInput >= 0 && typeof heightInput === "number" && !isNaN(heightInput) && heightInput >= 0 ) {

        areaTriangle = (0.5 * baseInput * heightInput);
    }
    else {

        alert('Input Valid Number');
    }
    // setAttribute and bubbleAdder

    const listContainer = setElementByClick('list-container');
    const innerText = "Triangle";
    const bubbleAdder = eventBubble(count, areaTriangle, innerText);
    listContainer.appendChild(bubbleAdder);
})
// addEventListener for rectangle
document.getElementById('btn-calculation-2').addEventListener('click', function () {
    count += 1;
    const rectangleWidth = getElementByValue('rectangle-width');
    const rectangleHight = getElementByValue('rectangle-hight');
    let areaRectangle;
    
    // validation
    if (typeof rectangleWidth === "number" && !isNaN(rectangleWidth) && rectangleWidth >= 0 && typeof rectangleHight === "number" && !isNaN(rectangleHight) && rectangleHight >= 0) {

        areaRectangle = (rectangleWidth * rectangleHight);
    }
    else {

        alert('Input Valid Number');
    }
    // setAttribute and bubbleAdder

    const listContainer = setElementByClick('list-container');
    const innerText = "Rectangle";
    const bubbleAdder = eventBubble(count, areaRectangle, innerText);
    listContainer.appendChild(bubbleAdder);
})
// addEventListener for parallelogram
document.getElementById('btn-calculation-3').addEventListener('click', function () {
    count += 1;
    const parallelogramWidth = getElementByValue('parallelogram-width');
    const parallelogramHigth = getElementByValue('parallelogram-higth');
    let areaParallelogram;
    // validation
    if (typeof parallelogramWidth === "number" && !isNaN(parallelogramWidth) && parallelogramWidth >= 0 && typeof parallelogramHigth === "number" && !isNaN(parallelogramHigth) && parallelogramHigth >= 0 ) {

        areaParallelogram = (parallelogramWidth * parallelogramHigth);
    }
    else {

        alert('Input Valid Number');
    }
    // setAttribute and bubbleAdder

    const listContainer = setElementByClick('list-container');
    const innerText = "Parallelogram";
    const bubbleAdder = eventBubble(count, areaParallelogram, innerText);
    listContainer.appendChild(bubbleAdder);
})
// addEventListener for rombuse
document.getElementById('btn-calculation-4').addEventListener('click', function () {
    count += 1;
    const rhombuseWwidth = getElementByValue('rhombuse-width');
    const rhombuseHigth = getElementByValue('rhombuse-higth');
    let areaRombuse;
    // validation
    if (typeof rhombuseWwidth === "number" && !isNaN(rhombuseWwidth) && rhombuseWwidth >= 0 && typeof rhombuseHigth === "number" && !isNaN(rhombuseHigth) && rhombuseHigth >= 0) {

        areaRombuse = (0.5 * rhombuseWwidth * rhombuseHigth);
    }
    else {

        alert('Input Valid Number');
    }
    // setAttribute and bubbleAdder

    const listContainer = setElementByClick('list-container');
    const innerText = "Rombuse";
    const bubbleAdder = eventBubble(count, areaRombuse, innerText);
    listContainer.appendChild(bubbleAdder);
})
// addEventListener for Pentagon
document.getElementById('btn-calculation-5').addEventListener('click', function () {
    count += 1;
    const pentagonPerimeter = getElementByValue('pentagon-perimeter');
    const pentagonApothem = getElementByValue('pentagon-apothem');
    let areaPentagon;
    // validation
    if (typeof pentagonPerimeter === "number" && !isNaN(pentagonPerimeter) && pentagonPerimeter >= 0 && typeof pentagonApothem === "number" && !isNaN(pentagonApothem) && pentagonApothem >= 0) {

        areaPentagon = (0.5 * pentagonPerimeter * pentagonApothem);
    }
    else {

        alert('Input Valid Number');
    }
    // setAttribute and bubbleAdder

    const listContainer = setElementByClick('list-container');
    const innerText = "Pentagon";
    const bubbleAdder = eventBubble(count, areaPentagon, innerText);
    listContainer.appendChild(bubbleAdder);
})
// addEventListener for Ellipse
document.getElementById('btn-calculation-6').addEventListener('click', function () {
    count += 1;
    const lengthOfSemiMajorAxis = getElementByValue('ellipse-length-of-semi-major-axis');
    const lengthOfSemiMinorAxis = getElementByValue('ellipse-length-of-semi-minor-axis');
    let areaEllipse;
    // validation
    if (typeof lengthOfSemiMajorAxis === "number" && !isNaN(lengthOfSemiMajorAxis) && lengthOfSemiMajorAxis >= 0 && typeof lengthOfSemiMinorAxis === "number" && !isNaN(lengthOfSemiMinorAxis) && lengthOfSemiMinorAxis >= 0 ) {

        areaEllipse = (3.14 * lengthOfSemiMajorAxis * lengthOfSemiMinorAxis);
    }
    else {

        alert('Input Valid Number');
    }
    // setAttribute and bubbleAdder

    const listContainer = setElementByClick('list-container');
    const innerText = "Ellipse";
    const bubbleAdder = eventBubble(count, areaEllipse, innerText);
    listContainer.appendChild(bubbleAdder);
})

// switch to blog webpage
document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href = 'blog.html';
})

// color addEventListener
   const  groupedSpans1 = document.getElementById('card-id-1');
   const  groupedSpans2 = document.getElementById('card-id-2');
   const  groupedSpans3 = document.getElementById('card-id-3');
   const  groupedSpans4 = document.getElementById('card-id-4');
   const  groupedSpans5 = document.getElementById('card-id-5');
   const  groupedSpans6 = document.getElementById('card-id-6');
   
    setRandomColorOnHover( groupedSpans1);
    setRandomColorOnHover( groupedSpans2);
    setRandomColorOnHover( groupedSpans3);
    setRandomColorOnHover( groupedSpans4);
    setRandomColorOnHover( groupedSpans5);
    setRandomColorOnHover( groupedSpans6);