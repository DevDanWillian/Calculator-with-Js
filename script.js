
const historico = document.getElementById('hist');
let res = document.getElementById('res');
let screen = document.getElementById("tela")

let num1 = 0;
let num2 = 0;



const igual = document.getElementById("calcBtnIgual")
const apaga = document.getElementById("apaga")
const c = document.getElementById("calcBtnC")
const mais = document.getElementById("calcBtnMais")
const menos = document.getElementById("calcBtnMenos")
const dividir = document.getElementById("calcBtnDiv")
const vezes = document.getElementById("calcBtnMult")



const calcBtnNum = document.querySelectorAll(".calcBtnNum")
calcBtnNum.forEach(function(btn) {
   btn.addEventListener("click", function() {
       const value = this.value || this.textContent;
       

       screen.value += value;
   });
});

function preventKeyboardInput(event) {
  event.preventDefault();
}

apaga.addEventListener("click", function() {
   screen.value = screen.value.substring(0, screen.value.length - 1);
});

c.addEventListener("click", function() {
   screen.value = "";
   historico.value = "";
   res.value = "";
   num1 = "";
   num2 = "";
   operator = "";
})

igual.addEventListener('click', function() {

})


mais.addEventListener("click", function() {
   const num1 = parseFloat(res.value);
   const num2 = parseFloat(screen.value);
   const resultado = num1 + num2;

   historico.value += screen.value + " + ";
   res.value = resultado;
   screen.value = "";
   //alert(typeof resultado);
})

menos.addEventListener("click", function() {
   const num1 = parseFloat(res.value);
   const num2 = parseFloat(screen.value);
   const resultado = num1 - num2;

   historico.value += screen.value + " - ";
   res.value = resultado;
   screen.value = ""
   //alert(typeof resultado);
})

vezes.addEventListener("click", function() {
   const num1 = parseFloat(res.value);
   const num2 = parseFloat(screen.value);
   const resultado = num1 * num2;

   historico.value += screen.value + " * ";
   res.value = resultado;
   screen.value = "";
   //alert(typeof resultado);
})

dividir.addEventListener("click", function() {
   const num1 = parseFloat(res.value);
   const num2 = parseFloat(screen.value);
   const resultado = num1 / num2;

   historico.value += screen.value + " / ";
   res.value = resultado;
   screen.value = "";
   //alert(typeof resultado);
})