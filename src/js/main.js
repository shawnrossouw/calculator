// **=====VARIABLES=========**

var screenOutput = document.querySelector('#results');
var ceBtn = document.querySelector('#ce');
var percentBtn = document.querySelector('#percent');
var multiplyBtn = document.querySelector('#multiply');
var equalBtn = document.querySelector('#equal');
var numbersBtn = document.querySelectorAll('[data-value]');
var sumBtn = document.querySelector('.calculator-buttons-plus');
var divideBtn = document.querySelector('.calculator-buttons-divide');
var minusBtn = document.querySelector('.calculator-buttons-minus');



//**=====FUNCTIONS=========**

function sum(value1, value2){
    console.log(value1 + value2);
}

function minus(value1, value2){
    return value1 - value2;
}

function multiply(value1, value2){
    return value1 * value2;
}

function divide(value1, value2){
    return value1 / value2;
}

//**=====EVENT LISTENERS=========**
//**=====NUMPAD=========**

numbersBtn.forEach(function(btn){
    btn.addEventListener('click', function(){
        if (screenOutput.innerHTML += parseInt(btn.innerHTML)) screenOutput.innerHTML -= parseInt("0");
    })
})

//**===== CALC BUTTONS=========**

sumBtn.addEventListener('click', function(){
    screenOutput.innerHTML += sumBtn.value;
    })

multiplyBtn.addEventListener('click', function(){
   screenOutput.innerHTML += multiplyBtn.value;
    })

divideBtn.addEventListener('click', function(){
    screenOutput.innerHTML += divideBtn.value;
    })    

minusBtn.addEventListener('click', function(){
    screenOutput.innerHTML += minusBtn.value;
    })    

ceBtn.addEventListener('click', function(){
    screenOutput.innerHTML = parseInt("0");
});




// if(somthing){
//     do foo()
// }






//**=====Urrrrghhh hurrrr urrrghh Brains...Brains..ZombieCode=========**

// sumBtn.addEventListener('click', function(){
//      results.innerHTML = sumBtn.value;
// });

// numbersBtn.forEach(function(btn){
//     btn.addEventListener('click', function(){
//       results.innerHTML = btn.innerHTML
//     })
// });


// equalBtn.addEventListener('click', function(){
//     results.innerHTML = eval(results.innerHTML)
// });

