
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