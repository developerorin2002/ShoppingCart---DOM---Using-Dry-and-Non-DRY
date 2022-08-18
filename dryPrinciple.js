

function updateInputValue (id , isIncrease) {
    const getId = document.getElementById(id);
    const getValue = getId.value;
    const convertValue = parseInt(getValue);

    let inputValue;
    if (isIncrease === true) {
        inputValue = convertValue + 1;
    }else{
        inputValue = convertValue - 1;
    };
    getId.value = inputValue;
    return inputValue;
}

function setPhoneCost (inputNumber , isPhone) {
    const getPhoneTotal = document.getElementById('phone-total');
    const getCaseTotal = document.getElementById('case-total')
    // set cost 
    let setTotal;
    if (isPhone === true) {
        setTotal = inputNumber * 1219;
        getPhoneTotal.innerText = setTotal;
    }else{
        setTotal = inputNumber * 59;
        getCaseTotal.innerText = setTotal;
    }
     
    
};

function getTotalCost (Id) {
    const getId = document.getElementById(id);
    const getText = getId.innerText;
    const convertText = parseFloat(getText);
    return convertText;
}

function returnNumber (elementId) {
    const getId = document.getElementById(elementId);
    const getText = getId.innerText;
    const convertNumber = parseFloat(getText);
    return convertNumber;
}

function costTotal () {
    const phoneTotal = returnNumber('phone-total')
    const caseTotal = returnNumber('case-total')
    const mainTotal = phoneTotal + caseTotal;
    const subTotal = document.getElementById('subtotal');
    subTotal.innerText = mainTotal;
    // including tax 
    const vat = 30 / 100;
    const tax = document.getElementById('tax');
    const allVatTax = mainTotal * vat;
    tax.innerText = allVatTax.toFixed(2) ;

    // total

    const total = document.getElementById('total');
    total.innerText = mainTotal + allVatTax;
    
    
}

// for phone 
document.getElementById('phone-plus').addEventListener('click',function(){
  const setInput = updateInputValue('phone-input',true);
  setPhoneCost(setInput , true);
  costTotal ();
})

document.getElementById('phone-minus').addEventListener('click',function(){
  const setInput = updateInputValue('phone-input',false);
  setPhoneCost(setInput , true);
  costTotal ();
})
// for casing 
document.getElementById('case-plus').addEventListener('click',function(){
    const caseInput = updateInputValue('case-input' , true);
    setPhoneCost(caseInput,false)
    costTotal ();
});
document.getElementById('case-minus').addEventListener('click',function(){
    const caseInput = updateInputValue('case-input' , false);
    setPhoneCost(caseInput,false)
    costTotal ();
});