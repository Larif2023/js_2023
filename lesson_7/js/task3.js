// Задача 4 Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів:
// 1) кількість парних
// 2) кількість додатних
// 3) кількість більших за 100
// Крок 0 Створюємо функції
function сompareNumbers(num1, num2, num3) {
  let evenNumbers = 0;
  let positiveNumbers = 0;
  let moreThan100Numbers = 0;

  if (num1 % 2 === 0) {
    evenNumbers++;
  }
  if (num2 % 2 === 0) {
    evenNumbers++;
  }
  if (num3 % 2 === 0) {
    evenNumbers++;
  }

  if (num1 > 0) {
    positiveNumbers++;
  }
  if (num2 > 0) {
    positiveNumbers++;
  }
  if (num3 > 0) {
    positiveNumbers++;
  }

  if (num1 > 100) {
    moreThan100Numbers++;
  }
  if (num2 > 100) {
    moreThan100Numbers++;
  }
  if (num3 > 100) {
    moreThan100Numbers++;
  }
  // Крок 1 Реалізація. Введення чисел користувачем
  document.write(
    `Введені числа: ${userNum1}, ${userNum2}, ${userNum3} <br> Кількість парних чисел: ${evenNumbers} <br> Кількість додатних чисел: ${positiveNumbers} <br> Кількість більших за 100: ${moreThan100Numbers}`
  );
}

let userNum1 = parseInt(prompt("Введіть перше число:"));
let userNum2 = parseInt(prompt("Введіть друге число:"));
let userNum3 = parseInt(prompt("Введіть третє число:"));
// Крок 2 Визов функції та передача фактичних параметрів
let resultValues = сompareNumbers(userNum1, userNum2, userNum3);
