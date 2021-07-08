// button event handelar
const login = document.getElementById('login');
login.addEventListener('click', function(){
    const formArea = document.getElementById('main-form');
    formArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
});



// // deposit event handelar
// const depositButton = document.getElementById('depositButton');
//     depositButton.addEventListener('click', function(){
//         // const depostAmount = document.getElementById('depositAmount').value;
//         // const depositNumber = parseFloat(depostAmount);
//         const depositNumber = getInput('depositAmount');
        
//         uptoDateNumber('depositBalance', depositNumber);
//         uptoDateNumber('currentBalacne', depositNumber);
        
//         document.getElementById('depositAmount').value = "";

// });

// // withdraw button hanler 
// const btnwithdraw = document.getElementById('withdraw');
// btnwithdraw.addEventListener('click', function(){
    
//     const withdrawNumber = parseFloat(getInput('withdrawAmount'));
//     const blance = parseFloat(document.getElementById('currentBalacne').innerText);
//     if(withdrawNumber <= blance){
//         const min=blance-withdrawNumber;
//         document.getElementById('currentBalacne').innerText=min;
//         uptoDateNumber('withdrawNumberW', withdrawNumber);
//     }else{
//         alert('Tomer tk nai');
//         return;
//     }
    
// });


// function getInput(id){
//     const withdrawAmount = document.getElementById(id).value;
//     const withdrawNumber = parseFloat(withdrawAmount);
//     document.getElementById('withdrawAmount').value = "";
//     return withdrawNumber;
// }
// function uptoDateNumber(id, depositNumber){
    
//     const depositBalance = document.getElementById(id).innerText;
//     const currentDepostNumber = parseFloat(depositBalance);
//     const toTaldepsot = depositNumber + currentDepostNumber;
//     document.getElementById(id).innerText = toTaldepsot;
// }


// deposit event handler

var depositBTn = document.getElementById('depositButton');
depositBTn.addEventListener('click', function () {
    const depositNumber = getInputNumber('depositAmount');

    uptoDateNumber("depositBalance", depositNumber);
    uptoDateNumber("currentBalacne", depositNumber);
    document.getElementById('depositAmount').value = "";
    
});




// withdraw event handler

var withdrawBtn = document.getElementById('withdrawBTn');
withdrawBtn.addEventListener('click', function () {
    const withdrawNumber = getInputNumber('withdrawAmount');
    // console.log(withdrawNumber);
    uptoDateNumber("withdrawcurrentbance", withdrawNumber);
    uptoDateNumber("currentBalacne",-1 *  withdrawNumber);

    document.getElementById('withdrawAmount').value = "";


});

// button event handler 

function getInputNumber(id) {
    const amout = document.getElementById(id).value;
    const amountNumber = parseFloat(amout);
    return amountNumber;
}


function uptoDateNumber(id, depositNumber) {
    var currentBalacne = document.getElementById(id).innerText;
    var currentBalacneValue = parseFloat(currentBalacne);
    var toatalCureentBalance = depositNumber + currentBalacneValue;
    document.getElementById(id).innerText = toatalCureentBalance;
}
