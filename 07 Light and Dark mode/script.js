const fullDarkModeCheckbox = document.getElementById('full-dark-mode')
const containedDarkModeCheckbox = document.getElementById('container-dark-mode')
const container = document.querySelector('.container')

isFullDarkMode = JSON.parse(localStorage.getItem('fullDarkModeCheckbox'))
isContainedDarkMode = JSON.parse(localStorage.getItem('containedDarkModeCheckbox'))

if(isFullDarkMode){    
    fullDarkModeCheckbox.checked = true
    changeFullDarkMode()
}
if(isContainedDarkMode){
   containedDarkModeCheckbox.checked = true
   changeContainedDarkMode()
  
}




fullDarkModeCheckbox.addEventListener('change',(e)=>{
   changeFullDarkMode()
   changeContainedDarkMode()
})

containedDarkModeCheckbox.addEventListener('change', changeContainedDarkMode)

function changeFullDarkMode(){
    if(fullDarkModeCheckbox.checked){
        localStorage.setItem('fullDarkModeCheckbox',true)
        localStorage.setItem('containedDarkModeCheckbox',true)
        // container.classList.add('dark')
        document.body.classList.add('dark')
    }else{
        document.body.classList.remove('dark')
        container.classList.remove('dark')
        localStorage.setItem('fullDarkModeCheckbox',false)
        localStorage.setItem('containedDarkModeCheckbox',false)
    }
    // containedDarkModeCheckbox.checked = fullDarkModeCheckbox.checked
}

function changeContainedDarkMode(){
    if(containedDarkModeCheckbox.checked){
        localStorage.setItem('containedDarkModeCheckbox',true)
        container.classList.add('dark')
    }else{
        container.classList.remove('dark')
        localStorage.setItem('containedDarkModeCheckbox',false)
    }
}
