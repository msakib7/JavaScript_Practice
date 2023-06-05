// const sections = document.querySelectorAll('section');
// console.log(sections);
// for(const section of sections)
// {
//     console.log(section);
// }
// const liCollections = document.getElementsByTagName('li');
// console.log(liCollections);
// for(const li of liCollections)
// {
//     console.log(li);
// }
// event section
console.log("Got js");

function colorChange(){
    const sectionColor = document.getElementById('section1');
    sectionColor.style.backgroundColor='lightgrey';
    sectionColor.style.padding = "10px";
    sectionColor.style.borderRadius = "15px";
}

document.getElementById("red-Button").addEventListener('click', function(){
          const sectionColor = document.getElementById("section1");
          sectionColor.style.backgroundColor = "red";
          sectionColor.style.padding = "10px";
          sectionColor.style.borderRadius = "15px";
});
function handleOnClick(){
    console.log("Button clicked");
    const titleStatus = document.getElementById('title-status');
    titleStatus.innerText = 'Changed text';
}
function handleOnClickReturn(){
    console.log("Button clicked");
    const titleStatus = document.getElementById('title-status');
    titleStatus.innerText = 'This is test text';
}
// Input section
document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log("Submit button clicked");
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    const p = document.getElementById('input-text');
    p.innerText = inputText;
    inputField.value = '';
})
// comment addition
    let i = 4;
    document.getElementById('btn-post').addEventListener('click',function(){
    const commentBox = document.getElementById('new-comment');
    const newComment = commentBox.value; 
    console.log(newComment); 
    const commentContainer = document.getElementById('comment-container');
    const h = document.createElement('h3');
    h.innerText = 'This is '+i+' Comment';i++;

    const p = document.createElement('p');
    p.innerText = newComment;
    commentContainer.appendChild(h);
    commentContainer.appendChild(p);
    commentBox.value = '';

})
