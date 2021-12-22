/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

function primes(num) {
    // Напишите код здесь
    function isPrime(target) {
        
        if (target < 2) return false;
        if (target < 4) return target;

        for (let i = 2; i < target; i++) {
            if (!(target%i)) return false;
        }

        return target;

    }
    
    return Array.from({length: num}, (_, i) => isPrime(i + 1)).filter(el => el !== false);

}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(17)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]