const historico = document.getElementById("hist");
let res = document.getElementById("res");
let screen = document.getElementById("tela");
//

const igual = document.getElementById("calcBtnIgual");
const apaga = document.getElementById("apaga");
const c = document.getElementById("calcBtnC");
const mais = document.getElementById("calcBtnMais");
const menos = document.getElementById("calcBtnMenos");
const dividir = document.getElementById("calcBtnDiv");
const vezes = document.getElementById("calcBtnMult");
const porc = document.getElementById("calcBtnP");

const ponto = document.getElementById("calcBtnPonto");
const calcBtnNum = document.querySelectorAll(".calcBtnNum");
calcBtnNum.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const value = this.value || this.textContent;

    screen.value += value;
  });
});

function preventKeyboardInput(event) {
  event.preventDefault();
}

apaga.addEventListener("click", function () {
  screen.value = screen.value.substring(0, screen.value.length - 1);
});

c.addEventListener("click", function () {
  screen.value = "";
  historico.value = null;
  res.value = Number("");
  num1 = "";
  num2 = "";
  operator = "";
});

ponto.addEventListener("click", function () {
  if (!screen.value.includes(".")) {
    screen.value += ".";
  }
});

igual.addEventListener("click", function () {
  handleOperationClick("=");
});

// Event listeners para os botões de operação
mais.addEventListener("click", function () {
  handleOperationClick("+");
});

menos.addEventListener("click", function () {
  handleOperationClick("-");
});

vezes.addEventListener("click", function () {
  handleOperationClick("*");
});
dividir.addEventListener("click", function () {
  handleOperationClick("/");
});

porc.addEventListener("click", function () {
  handleOperationClick("%");
});

// Event listener para os botões de operação
function handleOperationClick(operator) {
  const num1 = parseFloat(res.value); // Converter para número
  const num2 = parseFloat(screen.value); // Converter para número
  let resultado = 0;

  switch (operator) {
    case "+":
      historico.value += screen.value + " +";
      resultado = num1 + num2;
      break;
    case "-":
      historico.value += screen.value + " -";
      resultado = num1 - num2;
      break;
    case "*":
      historico.value += screen.value + " *";
      if (num2 === 0 || num1 === 0) {
        res.value = screen.value;

        screen.value = "";
        return;
      } else {
        resultado = num1 * num2;
      }
      break;
    case "/":
      historico.value += screen.value + " /";
      if (num2 === 0 || num1 === 0) {
        res.value = screen.value;
        screen.value = "";
        return;
      } else {
        resultado = num1 / num2;
      }
      break;

    case "%":
      historico.value += screen.value + " %";
      if (num2 === 0 || num1 === 0) {
        res.value = screen.value;

        screen.value = "";
        return;
      } else {
        resultado = (num1 * num2) / 100;
      }
      break;

    case "=":
      const historicovaluetrim = historico.value.trim().slice(-1);
      historico.value += screen.value + " =";
      switch (historicovaluetrim) {
        case "+":
          resultado = num1 + num2;

          break;
        case "-":
          resultado = num1 - num2;
          break;
        case "*":
          resultado = num1 * num2;
          break;
        case "/":
          resultado = num1 / num2;
          break;
        case "%":
          resultado = (num1 * num2) / 100;
          break;
        default:
          console.error("Operador não suportado:", historicovaluetrim);
          break;
      }

      break;
    default:
      console.error("Operação não suportada:", operator);
      return;
  }

  res.value = parseFloat(resultado);
  screen.value = "";
  if (isNaN(resultado)) {
    resultado = 0;
  }
}
