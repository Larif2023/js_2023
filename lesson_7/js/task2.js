"user strict";
// Задача 3 Створити окремі функції, які для 4 чисел знаходять:
// 1. суму;
// 2. добуток;
// 3. середнє арифметичне;
// 4. мінімальне значення.
// Крок 0 Створюємо функції
// 1. Функція для знаходження суми
function getSumNumbers(num1, num2, num3, num4) {
  return num1 + num2 + num3 + num4;
}
// 2. Функція для знаходження добутку
function getProductNumners(num1, num2, num3, num4) {
  return num1 * num2 * num3 * num4;
}
// 3. Функція для середнього аріфметичного
function getAverageNumber(num1, num2, num3, num4) {
  return (num1 + num2 + num3 + num4) / 4;
}
// 4. Функція для мінімального значення
function getMinNumber(num1, num2, num3, num4) {
  return Math.min(num1, num2, num3, num4);
}
// Крок 1 Реалізація. Введення чисел користувачем
let userNum1 = parseInt(prompt("Введіть перше число"));
let userNum2 = parseInt(prompt("Введіть друге число"));
let userNum3 = parseInt(prompt("Введіть третє число"));
let userNum4 = parseInt(prompt("Введіть четверте число"));

// Крок 2 Перевірка на коректність чисел
if (isNaN(userNum1) || isNaN(userNum2) || isNaN(userNum3) || isNaN(userNum4)) {
  document.write("Помилка. Потрібно ввести лише числа");
} else {
  // Крок 3 Визов функції та передача фактичних параметрів
  let sumResult = getSumNumbers(userNum1, userNum2, userNum3, userNum4);
  let ProductResult = getProductNumners(userNum1, userNum2, userNum3, userNum4);
  let averageResult = getAverageNumber(userNum1, userNum2, userNum3, userNum4);
  let minResult = getMinNumber(userNum1, userNum2, userNum3, userNum4);

  document.write(
    `Введені числа: ${userNum1}, ${userNum2}, ${userNum3}, ${userNum4} <br> Сума чисел: ${sumResult} <br> Добуток чисел: ${ProductResult} <br> Середнє арифметичне: ${averageResult} <br> Мінімальне значення: ${minResult}`
  );
}
