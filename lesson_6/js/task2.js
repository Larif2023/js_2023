"user strict";
// Крок 0 Вводимо позначення
// - початкове позначення діапазону - minRangeNum
// - кінцеве позначення діапазону - maxRangeNum
// - сума непарних чисел - sumUnpaired
// Крок 1 Введення данних
let minRangeNum = parseInt(prompt("minRangeNum"));
let maxRangeNum = parseInt(prompt("maxRangeNum"));
let sum = 0;
// Крок 2 Рішення
for (let i = 0; i < 15; ) {
  const randNum =
    minRangeNum + Math.floor(Math.random() * (maxRangeNum - minRangeNum + 1));
  if (randNum % 2 !== 0) {
    sum += randNum;
    i++;
  }
}
// Крок 3 Виведення результату
document.write(`Sum=${sum}`);
alert(`Sum=${sum}`);
console.log(`Sum=${sum}`);
