/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(num) {

  const array = Array.from({length: num}, (_, i) => i + 1 );

  function checkElement(element) {
    let count = ""
    if (!(element%3)) count += 'fizz';
    if (!(element%5)) count += 'buzz';
    return (count === "") ? element : count;
  }

  array.forEach(element => {
    console.log(checkElement(element));
  });
 
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(15));