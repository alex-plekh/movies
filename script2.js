// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let i = 2;
// while (i <= 16) {
//     if(i % 2){
//         console.log(i)
//     }
//     i++
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// function fifthTask() {
//     const arrayOfNumbers = [];
//     for (let i = 5; i <= 10;i++){
//         arrayOfNumbers.push(i);
//     }
//
//     return arrayOfNumbers;
// }
//
// console.log(fifthTask());

// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i]);
//     }
//     console.log(result);
//     return result;
// }
// console.log(firstTask());

// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//
//     // Пишем решение вот тут
//     for (let i = 0; i < data.length; i++) {
//         if (typeof data[i] === 'number'){
//             data[i] *= 2;
//         }else if (typeof data[i] === 'string'){
//             data[i] += ' - done';
//         }
//     }
//     // Не трогаем
//     console.log(data);
//     return data;
// }
//
// console.log(secondTask());

// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];
//     // data.reverse();
//     for (let i = data.length-1; i >=
//     0; i--) {
//         result.push(data[i]);
//     }
//
//     // Не трогаем
//     return result;
// }
//
// console.log(thirdTask());

// const lines = 5;
// let result = '';
//
// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }
//
// console.log(result)

// function sayHello(name) {
//     return `Привет ${name}!`
// }
//
// console.log(sayHello( 'Антон'));

// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }
// console.log(returnNeighboringNumbers(4))

// function getMathResult(base, rate) {
//     let sum = base;
//     for (let i = 1; i < rate; i++) {
//         console.log(sum +=base)
//     }
//     return sum;
// }
//
// console.log(getMathResult(2,4))

// function getMathResult(base, rate) {
//     if (typeof(rate) !== 'number' || rate <= 0) {
//         return base;
//     }
//     let str = '';
//
//     for (let i = 1; i <= rate; i++) {
//         if (i === rate) {
//             str += `${base * i}`;
//         } else {
//             str += `${base * i}---`;
//         }
//     }
//
//     return str;
// }
//
// console.log(getMathResult(10, 5));