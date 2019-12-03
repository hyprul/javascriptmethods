var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
function double(x) {
    return 2 * x;
}

const newNumbers = numbers.map(double);

//Filter - Create a new array by keeping the items that return true.


const newNumbers = numbers.filter(function (number) {
    return number < 10;
});

var newNumbers = [];

numbers.forEach(function (num) {
    if (num < 10) {
        newNumbers.push(num);
    }
})

//Reduce - Accumulate a value by doing something to each item in an array.

var newNumber = numbers.reduce(function (acculumator, currentNumber) {
    return acculumator + currentNumber;
})

//Find - find the first item that matches from an array.

const newNumber = numbers.find(function (num) {
    return num > 10;
})

//FindIndex - find the index of the first item that matches.

const index = numbers.findIndex(function (num) {
    return num > 10;
})