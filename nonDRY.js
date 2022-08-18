
// phone 

function updatePhone (isIncrease) {
    const getPhoneInput = document.getElementById('phone-input');
    const getValue = getPhoneInput.value;
    const parseValue = parseInt(getValue);
    // update 
    let newValue ;
    if (isIncrease === true) {
        newValue = parseValue + 1;
    }else{
        newValue = parseValue - 1;
    }
    getPhoneInput.value = newValue;
    return newValue;
}

// casing

function getPhoneTotal (getUpdate) {
    const totalPrice = getUpdate * 1219;
    const phoneTotal = document.getElementById('phone-total');
    phoneTotal.innerText = totalPrice;
};

function updateCaseTotal (isIncrease) {
    const caseInput = document.getElementById('case-input');
    const getValue = caseInput.value;
    const parseValue = parseInt(getValue);

    let newValue;
    if (isIncrease === true) {
        newValue = parseValue + 1;
    }else{
        newValue = parseValue - 1;
    }

    caseInput.value = newValue;
    return newValue;
}


function setTotalPrice (getCase){
    const totalPrice = getCase * 59;
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = totalPrice;
} 

function getTextElementValue (id) {
    const getTotal = document.getElementById(id);
    const getTotalValue = getTotal.innerText;
    const currentTotal = parseInt(getTotalValue);
    return currentTotal;
}
function subtotal(){
    const currentPhoneTotal = getTextElementValue('phone-total');
    const currentCaseTotal = getTextElementValue('case-total');
    const currentSubTotal = currentCaseTotal + currentPhoneTotal;
    const subtotal = document.getElementById('subtotal');
    subtotal.innerText = currentSubTotal;
    // tax
    const tax = 30 /100;
    const withTax = currentSubTotal * tax;
    const getTax = document.getElementById('tax');
    getTax.innerText = withTax.toFixed(2);

    // total 

    const total = currentSubTotal + withTax;

    const getTotal = document.getElementById('total');
    getTotal.innerText = total;




    
}
// phone
document.getElementById('phone-plus').addEventListener('click',function() {
    const getUpdate = updatePhone(true);
    getPhoneTotal(getUpdate);
    subtotal();
    
    
});
document.getElementById('phone-minus').addEventListener('click',function() {
    const getUpdate = updatePhone(false);
    getPhoneTotal(getUpdate);
    subtotal();
});



// casing
document.getElementById('case-plus').addEventListener('click',function(){
    const getCasePlus = updateCaseTotal(true);
    setTotalPrice(getCasePlus);
    subtotal()
});
document.getElementById('case-minus').addEventListener('click',function(){
   const getCaseMinus = updateCaseTotal(false);
   setTotalPrice(getCaseMinus);
   subtotal()
   
});











