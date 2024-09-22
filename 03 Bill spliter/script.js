const billAmountInput = document.querySelector('.input-container > input[type="number"]')
const customTipInput = document.querySelector('.custom-tip')
const totalMemberInput = document.querySelector('.number-of-people')
const totalBillAmountOutput = document.querySelector('.total')
const eachPersonBillOutput = document.querySelector('.each-person')
let totalTipAmountOutput = document.querySelector('.tip-amount')
const generateBillBtn = document.querySelector('button[type="button"]')
const resetBtn = document.querySelector('button[type="reset"]')
const tipsContainer = document.querySelector('.flex-group')
let tipSelected = 0

generateBillBtn.addEventListener('click',()=>{
    let billAmtInputValue = parseInt(billAmountInput.value)
    let calTipAmount = parseInt((tipSelected*billAmtInputValue)/100)
    let totalMemberValue = parseInt(totalMemberInput.value)
    // let customTipValue = parseFloat(tipSelected)
    let grandTotal = billAmtInputValue + calTipAmount;
    let perPerson = parseInt(grandTotal/totalMemberValue)
    totalTipAmountOutput.textContent = `₹${calTipAmount}`
    totalBillAmountOutput.textContent =`₹${grandTotal}`
    eachPersonBillOutput.textContent = `₹${perPerson}`

    resetBtn.disabled = false
})

tipsContainer.addEventListener('click',(e)=>{
    if(tipsContainer.classList.contains('disabled')) return
    if(e.target != tipsContainer){
        ;[...tipsContainer.children].forEach(tip => {
            tip.classList.remove('selected')
        });
        e.target.classList.toggle('selected')
        tipSelected = parseInt(e.target.textContent)
        customTipInput.value = ''
        if(totalMemberInput.value && tipSelected){
            generateBillBtn.disabled = false
        }
        else{
            generateBillBtn.disabled = true
        }
    }
})
customTipInput.addEventListener('input',(e)=>{
    ;[...tipsContainer.children].forEach(tip => {
        tip.classList.remove('selected')
    });
    tipSelected = parseInt(customTipInput.value)
    console.log(tipSelected);
    if(totalMemberInput.value && tipSelected){
        generateBillBtn.disabled = false
    }
    else{
        generateBillBtn.disabled = true
    }
})

billAmountInput.addEventListener('input',()=>{
if(billAmountInput.value){
    customTipInput.disabled = false
    totalMemberInput.disabled = false
    tipsContainer.classList.remove('disabled')
}else{
    customTipInput.disabled = true
    totalMemberInput.disabled = true
    tipsContainer.classList.add('disabled')
    // generateBillBtn.classList.add('disabled')
}
})

totalMemberInput.addEventListener('input',()=>{
    if(totalMemberInput.value && tipSelected){
        generateBillBtn.disabled = false
    }
    else{
        generateBillBtn.disabled = true
    }
})

resetBtn.addEventListener('click',()=>{
    billAmountInput.value = ''
    customTipInput.value = ''
    totalMemberInput.value = ''
    totalTipAmountOutput.textContent = ''
    totalBillAmountOutput.textContent = ''
    eachPersonBillOutput.textContent = ''
    ;[...tipsContainer.children].forEach(tip => {
        tip.classList.remove('selected')
    });
    tipSelected = undefined
    generateBillBtn.disabled = true
    tipsContainer.classList.add('disabled')
    customTipInput.disabled = true
    totalMemberInput.disabled = true
    resetBtn.disabled = true
})