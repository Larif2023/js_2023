"user strict";
// Крок 0 Виводимо позначення
// - кількість ящиків - boxesNumber
// Крок 1 Введення величин
let boxesNumber = parseInt(prompt("Початкова кількість ящиків з яблуками"));
// Крок 2 Розв'язання задачі
while (boxesNumber > 0) {
  const clientsBoxesNumber = parseInt(
    prompt("Скільки Ви хочете ящиків з яблуками?")
  );
  if (clientsBoxesNumber <= boxesNumber) {
    alert("Заберіть ящики з яблуками");
    boxesNumber -= clientsBoxesNumber;
    // Крок 3  Виводимо результат
  } else alert("Вибачте. У нас немає такої кількості");
}
alert("Товар продано");
