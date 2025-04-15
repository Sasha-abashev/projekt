const inp = document.getElementById("3n-input");
const inp2 = document.getElementById("3n-input2");
const inp3 = document.getElementById("3n-input3");
const btn = document.getElementById("3n-button");
const result = document.getElementById("3n-p");

btn.addEventListener("click", btn3n);

function btn3n() {
  const num1 = parseInt(inp.value);
  const num2 = parseInt(inp2.value);
  const num3 = parseInt(inp3.value);

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    result.textContent = "Введіть, будь ласка, числа!";
    return;
  }

  if (num1 === num2 && num2 === num3) {
    result.textContent = "Всі три числа однакові.";
  } else {
    let naibilshe = num1;
    if (num2 > naibilshe) {
      naibilshe = num2;
    }
    if (num3 > naibilshe) {
      naibilshe = num3;
    }
    result.textContent = `Найбільше число, яке ви ввели: ${naibilshe}.`;
  }
}
