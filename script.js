const historico = document.getElementById('hist');

const igual = document.getElementById("calcBtnIgual")
const apaga = document.getElementById("apaga")
const c = document.getElementById("calcBtnC")
const mais = document.getElementById("calcBtnMais")
const menos = document.getElementById("calcBtnMenos")
const dividir = document.getElementById("calcBtnDiv")
const vezes = document.getElementById("calcBtnMult")


const screen = document.getElementById("tela")

const calcBtnNum = document.querySelectorAll(".calcBtnNum")


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
   const currentValue = screen.value;
   historico.value += currentValue + ' +';
   historico.replace(/[^0-9]/g, '') + currentValue;
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