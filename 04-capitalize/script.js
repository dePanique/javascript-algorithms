/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    // Напишите код здесь
    function makeCapitalize(string) {
        if ((string === "") || (string === " ")) return string;
        if (string.length === 1) return string.split('').toUpperCase();
        return string.split('')[0].toUpperCase().concat(string.split('').slice(1).join(''));
    }

    return str.split(' ').map(el => makeCapitalize(el)).join(' ')
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"