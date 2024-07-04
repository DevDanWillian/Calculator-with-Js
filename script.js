

const historico = document.getElementById('hist');

let num1 = null;
let num2 = null;
let res = null;

const igual = document.getElementById("calcBtnIgual")
const apaga = document.getElementById("apaga")
const c = document.getElementById("calcBtnC")
const mais = document.getElementById("calcBtnMais")
const menos = document.getElementById("calcBtnMenos")
const dividir = document.getElementById("calcBtnDiv")
const vezes = document.getElementById("calcBtnMult")


let screen = document.getElementById("tela")

const calcBtnNum = document.querySelectorAll(".calcBtnNum")

function preventKeyboardInput(event) {
  event.preventDefault();
}
//--
calcBtnNum.forEach(function(btn) {
   btn.addEventListener("click", function() {
       // Get the value of the clicked button
       const value = this.value || this.textContent;
       
       // Append the value to the input field
       screen.value += value;
   });
});
//--

igual.addEventListener("click", function() {
   screen.value = screen;
   //if (screen.value === "undefined"){
     // screen.value = ""
   //}
});

apaga.addEventListener("click", function() {
   screen.value = screen.value.substring(0, screen.value.length - 1);
});

c.addEventListener("click", function() {
   screen.value=null;
   historico.value=null;
})

mais.addEventListener("click", function() {
//when the + button is clicked, the value of the input field is stored in the num1 variable
num1 = parseFloat(screen.value);

//when the + is clicked the screen value will be stored in historico
historico.value += num1 + " +";
screen.value = "";

//when the + button is clicked, the value of the input field plus is stored in the num2 variable
mais.addEventListener("click", function() {
num2 = parseFloat(screen.value);
res = num1 + num2;
screen.value = res;
historico.value += num2 + " = " + res;
});
});

 
 menos.addEventListener('click', function() {
   const currentValue = screen.value;
   historico.value += currentValue + ' -';
   screen.value = '';
 });
 
 dividir.addEventListener('click', function() {
   const currentValue = screen.value;
   historico.value += currentValue + ' /';
   screen.value = '';
 });
 
 vezes.addEventListener('click', function() {
   const currentValue = screen.value;
   historico.value += currentValue + ' *';
   screen.value = '';
 });