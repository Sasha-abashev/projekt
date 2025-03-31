function checkindYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    resultFirstTusk.textContent = "Ви народились у високосний рік";
  } else if (year <= 1900) {
    resultFirstTusk.textContent = "Ви ввели некоректний рік";
  } else if (year >= 2026) {
    resultFirstTusk.textContent = "Давай не балаболь";
  } else {
    resultFirstTusk.textContent = "Ви народились не у високосний рік";
  }
}
const checkYearButton = document.querySelector(".search-btn");
const yearInput = document.getElementById("yearInput");
const resultFirstTusk = document.getElementById("result");
checkYearButton.addEventListener("click", () => {
  const year = parseInt(yearInput.value);
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    resultFirstTusk.textContent = "Ви народились у високосний рік";
  } else if (year <= 1900) {
    resultFirstTusk.textContent = "Ви ввели некоректний рік";
  } else if (year >= 2026) {
    resultFirstTusk.textContent = "Давай не балаболь";
  } else {
    resultFirstTusk.textContent = "Ви народились не у високосний рік";
  }
});

// Завдання друге

const randomNumber = Math.floor(Math.random() * 10) + 1;
const yearInputNumber = document.getElementById("yearInputNumber");
const searchbtnnumber = document.querySelector(".search-btn-number");
const resultNumber = document.getElementById("resultNumber");
searchbtnnumber.addEventListener("click", () => {
  const Number = parseInt(yearInputNumber.value);
  if (Number === randomNumber) {
    resultNumber.textContent = "Вітаю, ви вгадали число! (number)";
  }
  else {resultNumber.textContent = "Вітаю, ви не вгадали число. (number)";}
});