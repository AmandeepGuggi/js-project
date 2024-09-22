const horizontalInput = document.querySelector('#hor-dir')
const verticleInput = document.querySelector('#ver-dir')
const msgTypeInput = document.querySelector('#msg-type')
const messageInput = document.querySelector('input[type="text"]')
const durationInput = document.querySelector('input[type="number"]')
const button = document.querySelector('button[type="button"]')
const toastContainer = document.querySelector('.toast-container')
const range = document.querySelector('input[type="range"]')
console.log(range.value);


button.addEventListener('click',()=>{
    if(horizontalInput.value == 'right'){
        toastContainer.classList.add('right')
       }
       else{
        toastContainer.classList.remove('right')
       }
       if(verticleInput.value == 'top'){
        toastContainer.classList.add('top')
       }
       else{
        toastContainer.classList.remove('top')
       }


    const newToast = document.createElement('p')
    newToast.classList.add('toast')
    let msgType = msgTypeInput.value
    // console.log(msgType);
    newToast.classList.add(msgType)
    newToast.textContent = messageInput.value;
    toastContainer.append(newToast)

   const closeIcon = document.createElement('span')
   closeIcon.textContent = ' ✕';
   closeIcon.style.cursor = "pointer"
   newToast.append(closeIcon)

   let rangeValue = parseInt(range.value)
   let durationValue = rangeValue*1000

   function removeToast() {
    if(toastContainer.classList.contains('right')){
        newToast.classList.add('go-right')
    }else{
        newToast.classList.add('go-left')
    }
    setTimeout(()=>{
        newToast.remove()
   },200)
   }


   closeIcon.addEventListener('click',()=>{
    removeToast()
   })

   setTimeout(()=>{
    removeToast()
   },durationValue)
   


   
})
