const span = document.querySelector('span')

const wordsList = ['Amandeep.', 'Developer.', 'Coder.', 'Student', 'Player']

const word = 'Amandeep'

let wordIndex = 0
let charIndex = 0
let skipUpdate = 0
let reverseType = false

setInterval(()=>{
    if(skipUpdate){
        skipUpdate--
        return
    }
    if(!reverseType){
        skipUpdate = 1
      span.textContent += wordsList[wordIndex][charIndex]
    charIndex++
    }else{
        span.textContent = span.textContent.slice(0, span.textContent.length-1)
        charIndex--
    }
    
    if(charIndex === wordsList[wordIndex].length){
        skipUpdate = 5
        reverseType = true
    }
    if(span.textContent.length === 0 && reverseType){
         reverseType = false  
         charIndex = 0
         wordIndex++
    }
    if(wordIndex === wordsList.length){
        wordIndex = 0
    }
   
    
}, 200)


// function x(){
//     for(let i=0; i<=word.length-1; i++){
//         setTimeout(function (){
//         console.log(word[i]);
//         span.textContent += word[i]
//         }, i*200)   
//         }
// }
// x()

