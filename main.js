// function inputValue(){
//     const input=document.querySelector(".calculator-screen-div").value;
//     if(isNaN(input)) { 
//         alert("Input value is not a number"); 
//         input.value = ''; 
//     }
//     // console.log(input);

   
// }


//all button click 
const allButton = document.querySelectorAll(".num-value-opor");
const inputt=document.querySelector(".calculator-screen-div");
for(let i=0;i<allButton.length;i++){
    allButton[i].addEventListener("click",function(){
        if(this.textContent=='C'){
            inputt.value="";
        }
        else{
            inputt.value+=this.textContent;
        }
    });
}

const inputsee=document.querySelector(".calculator-screen-div");


// backspacefun
function backspacefun(){
    const screen = document.getElementById("screen-Div").value;
    inputsee.value=screen.toString().slice(0,-1);
}




// equal click button

function equal(){
    const screen = document.getElementById("screen-Div").value;
    console.log(eval(screen))
  
    inputsee.value=eval(screen);
}

