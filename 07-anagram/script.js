/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(strOne, strTwo) {
    // Напишите код здесь
    function sortToAlphabet(a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }
    
    return strOne.toLowerCase().split('').sort((a, b) => sortToAlphabet(a, b)).join('') ===  strTwo.toLowerCase().split('').sort((a, b) => sortToAlphabet(a, b)).join('');

}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('up', 'UP')); // true
console.log(anagram('hello', 'bye')); // false