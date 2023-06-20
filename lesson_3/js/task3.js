"user strict";
//4. З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у
//садочку(7), школярем(12), студентом(17), працівником(65), пенсіонером).
//----
// Крок 0 Виводимо позначення
// - вік людини - userAge
// Крок 1 Введення величин
const userAge = parseInt(prompt("Ваш вік"));
let result;
// Крок 2 Розв'язання задачі
if (userAge < 1 || userAge > 150) result = "Некоректний вік";
else if (userAge <= 7) result = "Дитина у садочку";
else if (userAge <= 12) result = "Дитина у школі";
else if (userAge <= 17) result = "Студент";
else if (userAge <= 65) result = "Працівник";
else result = "Пенсіонер";
// Виводимо результат
document.write(result);
