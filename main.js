let nav = document.querySelector('.nav');
let btn = nav.querySelector('.btn');
let boxContainer = document.querySelector('.boxContainer');

btn.addEventListener('click', function(){

    let newel = document.createElement('p');  //paragraph element is created.
    boxContainer.appendChild(newel); //new paragarah element is pushed to boxContainer
    newel.classList.add('newBox'); //and newBox class is added to the paragraph element

    if (boxContainer.children.length == 200){
        alert('200!!! THATS ENOUGH BOX FOR TODAY')
    }
} )

