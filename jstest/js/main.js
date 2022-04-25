

let btn = document.querySelector('#btnMain')
let text = document.querySelector('p')

let select = document.querySelector('select')
let classes = ['text-v1', 'text-v2']

let oldClasses = []

select.innerHTML = ''
for (let index = 0; index < classes.length; index++) {
    const element = classes[index];
    // 1. <option value="4">Valik 4</option>
    //select.innerHTML += `<option value="${ index }">${ element }</option>`
    
    // 2
    let option = document.createElement('option') // <option></option>
    option.innerText = element
    option.setAttribute('value', 'valik_' + index)

    select.innerHTML += option.outerHTML 
}

if (oldClasses.length == 0){
    for (let index = 0; index < text.classList.length; index++) {
        oldClasses.push(text.classList[index]);
    }
} 

btn.addEventListener('click', event => {

    
    text.removeAttribute('class')
    for (let index = 0; index < oldClasses.length; index++) {
        text.classList.add(oldClasses[index]);
    }

    // 1
    // text.style.color = 'red'

    // 2 - class => array []
    //text.classList.add('text-v1', 'text-v2')

    // 3
    //console.log('index: ', select.selectedIndex, 'result: ', classes[select.selectedIndex] );
    //console.log('options: ');
    //text.classList.add(classes[select.selectedIndex])

    // 3.1.
    console.log(select.selectedOptions);
    if (select.selectedOptions.length > 0){
        text.classList.add(select.selectedOptions[0].innerText)
    } else {
        //alert('select an option')
        //throw new Error('Option not selected')
    }

    console.log( 
        document.querySelector('input[name="firstname"]').value,
        document.querySelector('input[name="lastname"]').value

        );
    //  document.querySelector('input[name="lastname"]').value = 'szfsfd'

    let link = document.getElementById('w3r')
    link.setAttribute('aaa', 'bbb')
    console.log(link.attributes.type.value);
    /*for (let index = 0; index < link.attributes.length; index++) {
        console.log(link.attributes[index].name);
    }*/
    console.log(link);

    // table add new row
    
    /*table.innerHTML += `<tr>
        <td>1</td><td>2</td><td>3</td><td>4</td>
    </tr>`*/
    
})

function sum(x, y, ...numbers){
    console.log(numbers);
    result = 0;
    for (let index = 0; index < numbers.length; index++) {
        result += numbers[index];
    }
    console.log('result: ', result);
}

sum(10, 15, 20, 30, 40, 50)





let table = document.querySelector('table')
let btns = table.querySelectorAll('button')
let trs = table.querySelectorAll('tr')

for (let index = 0; index < btns.length; index++) {
    
    btns[index].addEventListener('click', event => {

        // empty table
        table.innerHTML = ''


        console.log(event.target.dataset.rownr);
        let btnRowNr = event.target.dataset.rownr

        for (let rowIndex = 0; rowIndex < trs.length; rowIndex++) {

            if (rowIndex == btnRowNr){
                table.innerHTML += trs[rowIndex].outerHTML

                // new row
                let tr = document.createElement('tr')
                for (let index = 0; index < 4; index++) {
                    let td = document.createElement('td')
                    td.innerText = 'new ' + index
                    tr.appendChild(td)
                }
                table.innerHTML += tr.outerHTML

                // next row data change
                for (let index = (rowIndex + 1); index < btns.length; index++) {
                    btns[index].dataset.rownr = index + 1
                }
                

            } else {
                table.innerHTML += trs[rowIndex].outerHTML
            }
        }

    })
    
}
