"user strict";
// Крок 0 Виводимо позначення
// - userQuantity
// - cycleQuantity
// Крок 1 Введення величин
let userQuantity = parseInt(prompt("Введіть число пунктів списку"));
// Крок 2 Розв'язання задачі
document.write("<ul>");
for (cycleQuantity = 0; cycleQuantity < userQuantity; cycleQuantity++) {
  let someNum = 1 + Math.floor(Math.random() * 100);
  document.write(`<li>${someNum}</li>`);
}
document.write("</ul>");
if (userQuantity === 0) {
  document.write("Помилка! Кількість пунктів списку не може дорівнювати 0");
}
