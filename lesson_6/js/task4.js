"user strict";
// Крок 1 Введення величин Розв'язання задачі
for (let c1 = 1; c1 <= 9; c1++) {
  for (let c2 = 0; c2 <= c1; c2++) {
    for (let c3 = 0; c3 <= c2; c3++) {
      document.write(`${c1}${c2}${c3}<br>`);
    }
  }
}
