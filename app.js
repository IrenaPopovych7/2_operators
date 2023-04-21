let x = 1;
let y = 2;
x = x.toString();
let res1 = x + y;
console.log(res1); // Допишіть код, необхідно використовувати змінні x і y // ""12""
console.log(typeof res1); // ""string""

x = Boolean(!!x).toString();
let res2 = x + y;
console.log(res2); // Допишіть код, необхідно використовувати змінні x і y // ""true2""
console.log(typeof res2); // ""string""

let res3 = Boolean(!!(x + y));
console.log(res3); // Допишіть код, необхідно використовувати змінні x і y // true
console.log(typeof res3); // ""boolean""

let res4 = x.toString()- y;
console.log(res4); // Допишіть код, необхідно використовувати змінні x і y // NaN
console.log(typeof res4); // ""number""

//Task 3
let isAdult = prompt("How old are you?");
if (isAdult >= 18) {
  alert("Ви досягли повнолітнього віку");
} else {
  alert("Ви ще надто молоді");
}
// 4.
// Задано масив чисел, знайти число яке найбільш часто входить в масив, занести це число в новий масив і видалити всі входження цього числа із поточного масиву.
// let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5]
// let data = ...
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
let data = [];
if (arr.length === 0) {
  console.log("arr is empty");
} else {
  let count = {};
  let maxCount = 0;
  let frequentNum;

  for (let num of arr) {
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
    if (count[num] > maxCount) {
      maxCount = count[num];
      frequentNum = num;
    }
  }
  data.push(frequentNum);
  arr = arr.filter((num) => num !== frequentNum);

  console.log(
    "The number that is most often included in the array is:",
    frequentNum
  );
  console.log("New array:", data);
  console.log("Updated original array:", arr);
}

// }

//Task 5

let a = +prompt("Enter the side length of the triangle");
let b = +prompt("Enter the side length of the triangle");
let c = +prompt("Enter the side length of the triangle");
if (a <= 0 || b <= 0 || c <= 0 || isNaN(a) || isNaN(b) || isNaN(c)) {
  console.log("Invalid data");
} else {
  let p = (a + b + c) / 2;
  let area = Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(3);
  console.log("The area of the triangle is - ", +area);
}

if (
  a ** 2 + b ** 2 === c ** 2 ||
  a ** 2 + c ** 2 === b ** 2 ||
  b ** 2 + c ** 2 === a ** 2
) {
  console.log("The triangle is right triangle.");
} else {
  console.log("The triangle is not right triangle.");
}

let currentTime = new Date();
let hour = currentTime.getHours();
if ((hour) => 5 && hour <= 11) {
  console.log("Доброго ранку");
} else if (hour > 11 && hour < 17) {
  console.log("Доброго дня");
} else if (hour > 17 && hour < 23) {
  console.log("Доброго дня");
} else {
  console.log("Доброї ночі");
} // + switch ???

// ⭐⭐⭐
// (Ускладнене. Задача не оцінюється. Для тих, кому хочеться поробити ще щось)
// Вася працює програмістом і отримує 50$ за кожні 100 рядків коду(99 рядків - 0$, 199 рядків - 50$). За кожне третє запізнення Васю штрафують на 20$. Реалізувати меню :
// користувач вводить бажаний дохід Васі і кількість запізнень, порахувати, скільки рядків коду йому треба написати
// користувач вводить кількість рядків коду, написану Васею, і бажаний обсяг коштів. Порахувати, скільки разів Вася може запізнитися.
// користувач вводить кількість рядків коду і кількість запізнень, визначити, скільки грошей заплатять Васі і чи заплатять взагалі.
