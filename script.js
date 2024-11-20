let equal_pressed = 0;
// get all buttons
let button_input = document.querySelectorAll(".input-button");
//get display-input , equal , clear , erase buttons
let input = document.getElementById('input');
let equal = document.getElementById('equal');
let clear = document.getElementById('clear');
let erase = document.getElementById('erase');

window.onload = ()=>{
    input.value = '';
};

// accessing each input-class using for each for adding event listener

button_input.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(equal_pressed== 1){
            input.value="";
            equal_pressed = 0 ;
        }
        // display value of each button
        input.value+=button.value;
    })
});

equal.addEventListener("click",()=>{
    equal_pressed=1;
    let inp_val = input.value;

    try{
        let solution = eval(inp_val);

        // If solution is integer show it as it is
        // if solution is floating then show it to 2 decimal places
        if(Number.isInteger(solution)){
            input.value = solution;
        }
        else{
            input.value = solution.toFixed(2);
        }

    }
    catch{
        alert("Invalid Input !");
        // input.value=""; 
    }
});

// AC - all clear button
clear.addEventListener("click",()=>{
    input.value="";
});

// if the index 0 element of input string is / and *
let operator = document.querySelectorAll(".operator");

operator.forEach((op)=>{
    op.addEventListener("click",()=>{
        if(input.value == "*" || input.value == "/"){
            input.value="";
        }
    })
});

// erase button to clear last digit
erase.addEventListener("click",()=>{
    input.value=input.value.substr(0,input.value.length-1);
});