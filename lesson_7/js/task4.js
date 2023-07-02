"user strict";
// ДЗ Задача 6 Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням)

// Строрюємо функцію для будування таблиці
function buildTable(rows, columns) {
  document.write('<table class="block-task__table" border="2px">');
  // Використовуємо цикл для будування кількості рядків
  for (let i = 0; i < rows; i++) {
    document.write("<tr>");
    // Використовуємо цикл для будування кількості строк
    for (let j = 0; j < columns; j++) {
      document.write("<td>text</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");
}
// Вводимо дані
let userRows = parseInt(prompt("Введіть кількість рядків"));
let userColumns = parseInt(prompt("Введіть кількість строк"));

// Визов функції та передача фактичних параметрів
let tableResult = buildTable(userRows, userColumns);
