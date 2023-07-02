"user strict";
// Задача 2 Створити функцію, яка за номером дня дозволяє з'ясувати чи є цей день робочим
// Крок 0 Вводимо позначення
// - номер дня неділі - dayNumber
// - робочий день - workDay
// - вихідний день - dayOff
// Крок 1 Введення данних
let workDay = 0;
const dayNumber = parseInt(prompt("Введіть номер дня"));

function getGreetingWorkDay(workDay) {
  switch (dayNumber) {
    case 1:
      return "workDay";
    case 2:
      return "workDay";
    case 3:
      return "workDay";
    case 4:
      return "workDay";
    case 5:
      return "workDay";
    case 6:
      return "dayOff";
    case 7:
      return "dayOff";

    default:
      return "Невірне число";
  }
}
alert(getGreetingWorkDay(workDay));
