"user strict";
// 3. Випадковим чином генерується число від 1 до 5.<br>
// Спробуйте вгадати число
// за 2 спроби.
// Крок 0 Виводимо позначення
// - мінімальне число - minNum
// - максимальне число - maxNum
// - дані користувача - userNum
// - рандомне число - randNumber
// Крок 1 Введення величин
const minNum = 1;
const maxNum = 5;
const randNumber = 1 + Math.floor(Math.random() * 5);
// Крок 2 Розв'язання задачі
let userNum = parseInt(prompt("Введіть число"));
if (userNum === randNumber) alert("Ви вгадали :)");
else {
  userNum = parseInt(prompt("Ви не вгадали. Введіть число"));
  if (userNum === randNumber) alert("Ви вгадали");
}
// Виводимо результат
document.write(randNumber);
