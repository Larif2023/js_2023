"user strict";
const minNumber = 1;
const maxNumber = 1000;
let everNumber = 0;
let oddNumber = 0;
// Крок 2 Рішення
for (let i = 0; i < 100; i++) {
  const randNum =
    minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1));
  if (randNum % 2 === 0) everNumber++;
  else oddNumber++;
}
// Крок 3 Виведення результату
document.write(`oddNumber = ${oddNumber}, everNumber = ${everNumber}`);
