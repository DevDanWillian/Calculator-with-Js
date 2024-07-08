const historico = document.getElementById('hist');

let num1 = null;
let num2 = null;

const resultado = document.getElementById('res');

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

apaga.addEventListener("click", function() {
   screen.value = screen.value.substring(0, screen.value.length - 1);
});

c.addEventListener("click", function() {
   screen.value=null;
   historico.value=null;
   resultado.value=null;
})

// Adicione um ouvinte de evento de clique ao botão "igual"
igual.addEventListener('click', function() {

})

mais.addEventListener("click", function() {
  
   num1 = screen.value;
   
   historico.value += screen.value;
   historico.value+=" +";
resultado.value += num1;
   alert(typeof(num1))
   alert(typeof(historico))
   alert(typeof(resultado))
})