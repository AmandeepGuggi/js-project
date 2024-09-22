const header = document.querySelector('.header-container')
const menuIcon = document.querySelector('.menu')
const menuClose = document.querySelector('.close-icon')
const goTop = document.querySelector('.go-to-top')
const mainContent = document.querySelector('.main-content')
const nav = document.querySelector('nav')

goTop.addEventListener('click',()=>{
   mainContent.scrollTo(0,0)
})
menuIcon.addEventListener('click',(e)=>{
    e.stopPropagation()
    header.classList.add('menu-open')
})
nav.addEventListener('click', (e)=>{
    e.stopPropagation()
})
menuClose.addEventListener('click', (e)=>{
    e.stopPropagation()
    header.classList.remove('menu-open')
})
window.addEventListener('click', ()=>{
    header.classList.remove('menu-open')
})