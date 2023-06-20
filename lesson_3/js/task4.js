"user strict";
//5. З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий
//автомобіль, С-вантажний автомобіль). Вивести на екран назву транспортного
//засобу, яким він може керувати.
// Крок 0 Виводимо позначення
// - категорії водія - driverCategory
// Крок 1 Введення величин
let driverCategory = prompt("Введіть категорію водія - A, B, C", "");
let category;
// Крок 2 Розв'язання задачі
switch (driverCategory.toUpperCase()) {
  case "A":
  case "a":
    category = "мотоциклом";
    break;
  case "B":
  case "b":
    category = "легковим автомобілем";
    break;
  case "C":
  case "c":
    category = "вантажним автомобілем";
    break;

  default:
    category = "Ой, щось пішло не так! ";
    break;
}
alert(category);
