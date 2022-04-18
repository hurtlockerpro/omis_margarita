
let result = document.getElementById("result")
let btns = document.getElementsByClassName('btn')

let excludeKeyboardKeys = [111, 106, 109, 107, 13, 110, 190, 8, 37, 39, 40, 38]
let lastSymbol = ''

for (let index = 0; index < btns.length; index++) {
    const btn = btns[index];
    //console.log(btn);
    btn.addEventListener('click', event => {

        let btnTitle = event.target.innerText
        console.log(btnTitle);
        if (btnTitle == '=')
        {
            result.value = calculateResult(result.value)
        } else if (btnTitle == 'CE'){
            // result.value = setZero()
            setZero()
        }
        else {
            if (isLeadingZero()) // correct, if (true == true) // correct
            {
                result.value = result.value.substr(1, result.value.length) + btnTitle
            } else {
                result.value += btnTitle
            }
        }

        result.focus()
    })
}
function calculateResult(formula){
    return eval(formula)
}
function setZero(){
    // return 0
    result.value = 0
}
function isLeadingZero(){ // boolean
    //      true                                        true
    if (
        result.value.substr(0, 2) != '0.' && 
        result.value.substr(0, 1) == 0 && 
        result.value.length >= 1)
    {
        console.log('leading zero');
        return true // end
    }

    console.log('after if');
    return false
}

result.addEventListener('keydown', event => {
    
    // true !true = false 
    // false  !false = true
    if (
        (event.keyCode < 48 || 
        (event.keyCode > 57 && event.keyCode < 96) || 
        event.keyCode > 105) &&
        !excludeKeyboardKeys.includes(event.keyCode)
    ) {
        console.log(event.keyCode);
        event.preventDefault()
    } 
    else if (event.keyCode == 13)
    {
        result.value = calculateResult(result.value)
    } 
    else if (excludeKeyboardKeys.includes(event.keyCode)) 
    {
        changeLastSymbol(event.key)
        event.preventDefault()
    }
})


function changeLastSymbol(currentSymbol){
    lastSymbol = result.value.substr(result.value.length - 1, 1)
    if (isNaN(lastSymbol))
    {
        result.value = result.value.substr(0, result.value.length - 1) + currentSymbol
    } else {
        result.value += currentSymbol
    }
}




// 1 == '1' : left equal to right
// 1 === 1 ->  true -> type comparison
// 1(number) === '1'(string) -> false

// != NOT  1 != 2 -> true
// !== NOT 1(number) !== '2'(string) -> true

// typeof 1  -> 'number'
// typeof '1'  -> 'string'

function myFunction (a, n){
    return a.substring(n-1, n)
}
/*
 0123456
'zyxbwpl'
['z', 'y', 'x', '']
[2]
*/

console.log(myFunction('abcd',1));
console.log(myFunction('zyxbwpl',5));
console.log(myFunction('gfedcba',3));



function myFunction2 (a){

    let count = a.length / 2

    // 2.5
    if (!Number.isInteger(count))
    {
        throw new Error('Number is not an integer')
        //console.log('Number is not an integer');
        //alert('Number is not an integer')
    }

    return a.slice(0, count)
}

//console.log(myFunction2('abcde'));

function myFunction3(a)
{
    // 4 / 2 = 2.0 // number,  double  2.0 2.4


    let str = 'a/b/c/d'
    //console.log(str[1]);
    console.log(str.split('/'));

    console.log((a % 2));





    return  (a % 2) == 0 ? false : true
}
myFunction3(5)
//myFunction3(10)



function myFunction4(a)
{
    return a.toFixed(2)
}

function myFunction5 (a)
{
    return a.toString().split('')
}



function myFunction6(a, b)
{
    function func2(x){
        return x.replace('%','');
    }
    const func = x => x.replace('%','');
    const first = func2(a);

    a = a.replace('%', '')
    b = b.replace('%', '').split('').reverse().join('')

    return  a.charAt(0).toUpperCase() + a.slice(1) + b 
}


console.log(myFunction6('java', 'tpi%rcs'));


function myFunction7 (a, b)
{
    let result = ''
    let loopNr = 1
    for(let index = a.length - 1; index >= 0; index--){
        if (loopNr % 3 === 0)
        {
            result = b + a[index] + result
        } else {
            result = a[index] + result
        }
        loopNr++
    }
    return result 
}

console.log(myFunction7('1234567','.'));