/*
 * Задача 10: «Факториал»
 *
 * Напишите функцию factorial(n), возвращающую факториал неотрицательного
 * целого числа. Факториал — это произведение всех натуральных чисел
 * от 1 до n включительно. Факториал 0 равен 1.
 * 
*/

function factorial(number) {
    // Напишите код здесь
    if(number < 2) return 1;
    let count = 1;
    let reducer = 1;

    function makeFactorial() {
        if (count === number) return reducer;
        count++;
        reducer *= count;
        return makeFactorial() ;
    }

    return makeFactorial();

}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(6)); // 720