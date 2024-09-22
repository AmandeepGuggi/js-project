const buttonPage= document.querySelector('.button')
const button = document.querySelector('.button button');
const popUp = document.querySelector('.popup');
const closeIcon = document.querySelector('.close-icon');

button.addEventListener('click',()=>{
    popUp.classList.add('block');
    buttonPage.classList.add('none')
})
closeIcon.addEventListener('click', ()=>{
    popUp.classList.remove('block');
    popUp.classList.add('none')
    buttonPage.classList.remove('none')
    popUp.classList.remove('none')
})

