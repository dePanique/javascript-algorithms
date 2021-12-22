/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 * 
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
*/

function fibonacci(n) {

    if (n === 1) return 0;
    
    const array = [3, 0, 1, 1];

    function makeNumber(funcArray) {

        if (funcArray[0] >= n) return funcArray[3];
        funcArray.copyWithin(1, 2);
        funcArray[3] = funcArray[1] + funcArray[2];
        funcArray[0]++;
      
        return makeNumber(funcArray)

    }
    return makeNumber(array)
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fibonacci(4)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)