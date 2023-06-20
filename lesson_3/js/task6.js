"user strict";
//7. З клавіатури вводиться номер місяця. Вивести до якої пори він
//відноситься
// Крок 0 Позначення величин
// - номер місяця - monthNumber
// Крок 1 Введення величин
monthNumber = parseInt(prompt("Введіть номер місяця"));
let result;
// Крок 2 Розв'язання задачі
switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    result = "Зима";
    break;
  case 3:
  case 4:
  case 5:
    result = "Весна";
    break;
  case 6:
  case 7:
  case 8:
    result = "Літо";
    break;
  case 9:
  case 10:
  case 11:
    result = "Осінь";
    break;

  default:
    result = "Невірне число";
    break;
}
alert(result);
