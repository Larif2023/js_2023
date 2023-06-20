"user strict";
//Крок 0 Виводимо позначення
// - ім'я першої дитини - firstChildName
// - ім'я другої дитини - secondChildName
// - кількість цукерок першої дитини - firstChildCandies
// - кількість цукерок другої дитини - secondChildCandies
// Крок 1 Введення величин
const firstChildName = prompt("Ім'я першої дитини?");
const secondChildName = prompt("Ім'я другої дитини?");
let firstChildCandies = parseInt(prompt("Кількість цукерок першої дитини", 0));
let secondChildCandies = parseInt(prompt("Кількість цукерок другої дитини", 0));
let result;
// Крок 2 Розв'язання задачі
if (firstChildCandies === secondChildCandies) {
  result = "Кількість цукерок однакова";
} else if (firstChildCandies > secondChildCandies) {
  result = firstChildName;
} else {
  result = secondChildName;
}
// Крок 3 Виводимо результат
alert(result);
document.write(result);
