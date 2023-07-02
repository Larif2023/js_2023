"user strict";
// Задача 0
// Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць
// Крок 0 Вводимо позначення
// - пори року - seasonNumber
// - номер місяця - monthNumber
// Крок 1 Введення данних
const seasonNumber = 0;
const monthNumber = parseInt(prompt("Введіть номер місяця"));

function getGreetingMonthOfYear(seasonNumber) {
  switch (monthNumber) {
    case 12:
    case 1:
    case 2:
      return "Зима";
    case 3:
    case 4:
    case 5:
      return "Весна";
    case 6:
    case 7:
    case 8:
      return "Літо";
    case 9:
    case 10:
    case 11:
      return "Осінь";
    default:
      return "Невірне число";
  }
}
alert(getGreetingMonthOfYear("seasonNumber"));
