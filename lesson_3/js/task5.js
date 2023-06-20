"user strict";
//6. З клавіатури вводиться . Вивести на екран назву дня.
// Крок 0 Виводимо позначення
// - номер дня тижня - dayNumber
dayNumber = parseInt(prompt("Введіть номер дня тижня"));
let result;
// Крок 2 Розв'язання задачі
switch (dayNumber) {
  case 1:
    result = "Понеділок";
    break;
  case 2:
    result = "Вівторок";
    break;
  case 3:
    result = "Середа";
    break;
  case 4:
    result = "Четвер";
    break;
  case 5:
    result = "П'ятниця";
    break;
  case 6:
    result = "Субота";
    break;
  case 7:
    result = "Неділя";
    break;

  default:
    result = "Невірне число";
    break;
}
alert(result);