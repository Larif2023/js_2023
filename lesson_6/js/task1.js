"user strict";
// крок 0 Визначаємо змінні
let simbol = "o";
let space = `&#160`;
// Крок 2 Рішення
for (let i = 0; i < 7; i++) {
  for (let j = 7; j > i; j--) {
    // Крок 3 Виведення результату
    document.write(`${space}`);
  }
  document.write(`${simbol}`);
  simbol += "o";
  document.write(`<br>`);
}
