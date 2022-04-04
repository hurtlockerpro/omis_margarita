
let firstname = 'Vladimir' // string

console.log('My name is: ', firstname)

// javascript
let mynumber = 'vladimir' // string
mynumber = 100 // number
mynumber = true // boolean : true/false

let x = 10
let y = 20

console.log('result: ', x + y);

y = 'vladimir' // 
/* 
sd b
sdf sdf 
*/

console.log('result: ', x + y); // concatenation

let u // undefined
let isNull = null
let devideByZore = NaN // not a number 
console.log( x / y);
console.log( y + x, x + y );



let obj = ['audi', 'bmw'] // array, type => object
let obj1 = {} // array, type => object

//    true
x = 9
if (x == 9 && x < 10 && false){
    console.log('x is equal to 9');
} else if (x >= 10) {
    console.log('x is less than 10');
} else if (x == 5 || x > 10 || x == 1) {
    console.log('x is less than 5');
}
else {
    console.log('x is greater than 10');
}


// 
//&& - AND 
// true && true && true -> {}
// true && true && true && false -> x

// || - OR
// true || false ||false ||false -> {}
// false || false || false ||false -> x

// ( true && true) || (true || false)
//x = 'dsfb'
if (typeof x === 'number'){
    console.log('x is type of number');
}
//       start          true        increment/decrement
// ++ => +1
// -- => -1
//      0        1     2    3       4         5
obj = ['audi', 'bmw', 101, true, undefined, null, 'fdghdsg', 1132431] 

console.log(obj[0]); // obj [ index ]

// lenght
// chaining.chaining.chaining

for (let index = 0; index <= obj.length - 1; index++) {
    //console.log( obj [index] );
    multiply(index, index)
}
//
/*
function multiply (y = 10, x = 25) {

    console.log('result: ', x * y);
}
//multiply() // start/ init/ run

function multiply2(x, y) {

    // logic
    x = x - 1
    y = y + 1

    return x * y
} */

//let result = multiply2(12, 12)
//console.log('and result is : ' , multiply2(12, 12));


// multiply table
//         0
let rowTotal = 15
let row = [] //[1,2,3,4,5,6,7,8,9,10]
for (let index = 0; index < rowTotal; index++) {
    //row[index] = index + 1
    row.push(index + 1)
}

let col = [1,2,3,4,5,6,7,8,9,10]

function multiply(x, y) {
    return x * y
} 

//let rowElement = undefined 

// row
for (let index = 0; index < row.length; index++) {
    const rowElement = row[index];
    // col
    for (let index = 0; index < col.length; index++) {
        const colElement = col[index];
        console.log('result (col=' + colElement + ', row=' + rowElement + '): ', multiply(colElement, rowElement));
    }
}

let multiplyTable = document.getElementById('multiplyTable')
multiplyTable.innerHTML = `
<table border="1">
<tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
</tr>
<tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
</tr>
<tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
</tr>
</table>`


console.log(multiplyTable.innerText);