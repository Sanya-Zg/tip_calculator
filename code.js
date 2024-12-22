const bill = document.getElementById('bill');
const tip_5 = document.getElementById('tip_5');
const tip_10 = document.getElementById('tip_10');
const tip_15 = document.getElementById('tip_15');
const tip_25 = document.getElementById('tip_25');
const tip_50 = document.getElementById('tip_50');
const custom = document.getElementById('custom');
const error_span = document.getElementById('error');
const people_num = document.getElementById('people_num');
const tip_pers = document.getElementById('tip_pers');
const total_pers = document.getElementById('total_pers');
const reset_button = document.getElementById('reset');

const buttonArray = [
    tip_5,
    tip_10,
    tip_15,
    tip_25,
    tip_50,
    
]
let activeButton = null;

buttonArray.forEach(button => {

    custom.addEventListener('input', () => {
        if(activeButton){
            activeButton.classList.remove('active_button');

            const amout = parseFloat(bill.value) ;
            const peoples = parseFloat(people_num.value);
            const customTip = parseFloat(custom.value);
            if(amout > 0 && peoples > 0 && customTip > 0) {
            const res = ((customTip * amout) / 100) / peoples;
            const resTotal = amout / peoples + res;
            tip_pers.textContent = "$" + res.toFixed(2);
            total_pers.textContent = "$" + resTotal.toFixed(2);
        } else {
            tip_pers.textContent = '$0.00';
            total_pers.textContent = '$0.00';
    }
        }
    })

    button.addEventListener('click', () => {
        if(activeButton){
            activeButton.classList.remove('active_button');
        }
        if(custom.value) {
            custom.value = '';
        }
    button.classList.add('active_button');
    activeButton = button;
    const persantage = button.dataset.persent;
    const amout = parseFloat(bill.value);
    const peoples = parseFloat(people_num.value);
        if(amout > 0 && peoples > 0 && persantage > 0) {
            const res = ((persantage * amout) / 100) / peoples;
            const resTotal = amout / peoples + res;
            tip_pers.textContent = "$" + res.toFixed(2);
            total_pers.textContent = "$" + resTotal.toFixed(2);
        } else {
            tip_pers.textContent = '$0.00';
            total_pers.textContent = '$0.00';
    }
});
});
bill.addEventListener('input', () => {
    if (activeButton) {
    const persantage = activeButton.dataset.persent;
    const amout = parseFloat(bill.value);
    const peoples = parseFloat(people_num.value);
    if(amout > 0 && peoples > 0 && persantage > 0) {
        const res = ((persantage * amout) / 100) / peoples;
        const resTotal = amout / peoples + res;
        tip_pers.textContent = "$" + res.toFixed(2);
        total_pers.textContent = "$" + resTotal.toFixed(2);
    } else {
        tip_pers.textContent = '$0.00';
        total_pers.textContent = '$0.00';
}}
})
people_num.addEventListener('input', () => {
    if (activeButton) {
    const persantage = activeButton.dataset.persent;
    const amout = parseFloat(bill.value);
    const peoples = parseFloat(people_num.value);
    if(amout > 0 && peoples > 0 && persantage > 0) {
        const res = ((persantage * amout) / 100) / peoples;
        const resTotal = amout / peoples + res;
        tip_pers.textContent = "$" + res.toFixed(2);
        total_pers.textContent = "$" + resTotal.toFixed(2);
    } else {
        tip_pers.textContent = '$0.00';
        total_pers.textContent = '$0.00';
}}
})

const zeroNum = 0.00;
reset_button.addEventListener('click', () => {
    bill.value = '';
    people_num.value = '';
    custom.value = '';
    tip_pers.textContent = "$" + zeroNum.toFixed(2);
    total_pers.textContent = "$" + zeroNum.toFixed(2);

    buttonArray.forEach(button => button.classList.remove('active_button'));
  activeButton = null; 
})

people_num.addEventListener('input', () => {
    const msgError = parseFloat(people_num.value) ;
    if(msgError < 1) {
        error_span.textContent = "Can't be zero"
        people_num.style.borderColor = 'red'
    } else {
        error_span.textContent = "";
        people_num.style.borderColor = 'transparent';
    }
})




