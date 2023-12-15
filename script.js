const inputTotalBill = document.getElementById("input-total-bill");
const inputTotalPeople = document.getElementById("input-total-people");
const inputCustomTip = document.getElementById("input-custom-tip");
const tips = document.querySelectorAll(".tip");
const tipPerPerson = document.getElementById("tip-per-person");
const totalPerPerson = document.getElementById("total-per-person");
const errorSpanBill = document.querySelector(".bill-error");
const errorSpanPeople = document.querySelector(".people-error");
const resetButton = document.getElementById("reset-button");

let totalPeople = 1;
let totalBill = 0;
let tipPercentage = 0.15;

tipPerPerson.innerHTML = "$" + (0).toFixed(2);
totalPerPerson.innerHTML = "$" + (0).toFixed(2);
inputTotalBill.addEventListener("input", billInputFunc);
inputTotalPeople.addEventListener("input", peopleInputFunc);
tips.forEach(function(value){
    value.addEventListener("click", selectTip);
});
inputCustomTip.addEventListener("input", tipInputFunc);
resetButton.addEventListener("click", reset);

function billInputFunc(){
    totalBill = parseFloat(inputTotalBill.value);
    errorSpanBill.style.display = "none";
    inputTotalBill.classList.remove("error-input");
    if(inputTotalBill.value == 0 && inputTotalBill.value != ""){
        errorSpanBill.style.display = "flex";
        inputTotalBill.classList.add("error-input");
    };
    calculateTip();
};

function peopleInputFunc(){
    totalPeople = parseInt(inputTotalPeople.value);
    errorSpanPeople.style.display = "none";
    inputTotalPeople.classList.remove("error-input");
    if(inputTotalPeople.value == 0 && inputTotalPeople.value != ""){
        errorSpanPeople.style.display = "flex";
        inputTotalPeople.classList.add("error-input");
    };
    calculateTip();
}

function selectTip(event){
    tips.forEach(function(value){
        value.classList.remove("selected-tip");
        if(event.target.innerHTML == value.innerHTML){
            value.classList.add("selected-tip");
            tipPercentage = parseFloat(value.innerHTML) / 100;
        }
    });
    calculateTip();
};

function calculateTip(){
    if(totalPeople >= 1){
        let totalTipPerPerson = (totalBill * tipPercentage) / totalPeople;
        let totalBillPerPerson = (totalBill / totalPeople) + totalTipPerPerson;
        tipPerPerson.innerHTML = "$" + (totalTipPerPerson).toFixed(2);
        totalPerPerson.innerHTML = "$" + (totalBillPerPerson).toFixed(2);
    };   
};

function reset(){
    tipPerPerson.innerHTML = "$" + (0).toFixed(2);
    totalPerPerson.innerHTML = "$" + (0).toFixed(2);
    inputTotalBill.value = "";
    inputTotalPeople.value = "";
    inputCustomTip.value = "";
    
    tips.forEach(tip => {
        tip.classList.remove("selected-tip");
    });
};

function tipInputFunc(){
    tipPercentage = parseFloat(inputCustomTip.value / 100);
    tips.forEach(function(value){
        value.classList.remove("selected-tip");
    });
    calculateTip();
};

