
let inpUsername = document.querySelector('input[name="username"]')
let inpPassword = document.querySelector('input[name="password"]')
// let allInputs = document.querySelectorAll('input')
let btnLogin = document.querySelector('input[type="button"]')

let modal = document.getElementById('exampleModal')
let modalBody = modal.querySelector('.modal-body')
let modalTitle = modal.querySelector('#exampleModalLabel')

let errorAlert = document.querySelector('.alert.alert-danger')

let errors = []

btnLogin.addEventListener('click', event => {
    console.log('btn clicked');

    errors = []
    checkInput(inpUsername)
    checkInput(inpPassword)

    if (errors.length > 0)
    {
        // adding red border to input
        inpUsername.classList.add('border', 'border-danger')
        inpPassword.classList.add('border', 'border-danger')


        let errorList = generateErrorsList()

        // alert
        errorAlert.innerHTML = errorList
        errorAlert.classList.remove('d-none')
        errorAlert.classList.add('d-block')

        // modal
        modalTitle.innerText = 'Error!'
        modalBody.innerHTML = errorList
        // open modal window
        let myModal = new bootstrap.Modal(modal ,
            {
                keyboard: true,
                backdrop: true,
                focus: false
            } 
        )
        myModal.show()
    }


})


function checkInput(input) { // undefined
    
    let errorText = input.attributes.name.value + ' is shorter than 3 symbols.'
    if (input.value.toString().trim().length <= 3) {
        
        console.log(errorText);
        if(errors.includes(errorText) == false){
            errors.push(errorText)
        }
    } else {
        if (errors.includes(errorText) == true){
            errors.splice(errors.indexOf(errorText), 1)
        }
    }
}

function generateErrorsList(){

    let ul = document.createElement('ul') // <ul></ul>
    
    for (let index = 0; index < errors.length; index++) {
        const errorText = errors[index];
        
        let li = document.createElement('li') // <li class="myLiElement" title="Hello"></li>
        li.innerText = errorText // <li>error</li>
        //li.classList.add('myLiElement')
        //li.setAttribute('title', 'Hello ' + index)
        
        ul.appendChild(li) // <-  <ul> <li>error</li> <li>error 2</li> </ul>
    }

    return ul.outerHTML // <ul> <li>error</li> <li>error 2</li> </ul>
}

modal.addEventListener('shown.bs.modal', function (event) {
    // do something...
    console.log('shown modal window');
})

modal.addEventListener('show.bs.modal', function (event) {
    // do something...
    console.log('show modal window');
})


inpUsername.addEventListener('keyup', event => {
    
    checkInput(inpUsername)
    checkInput(inpPassword)

    if (errors.length > 0)
    {
        let errorList = generateErrorsList()
        // alert
        errorAlert.innerHTML = errorList

        inpUsername.classList.remove('border')
        inpUsername.classList.remove('border-danger')


    } else {
        errorAlert.classList.remove('d-block')
        errorAlert.classList.add('d-none')
        // remove red border
        event.target.classList.remove('border')
        event.target.classList.remove('border-danger')
    }
})

inpPassword.addEventListener('keyup', event => {
    checkInput(inpUsername)
    checkInput(inpPassword)
        
    if (errors.length > 0)
    {
        let errorList = generateErrorsList()
        // alert
        errorAlert.innerHTML = errorList

        inpPassword.classList.remove('border')
        inpPassword.classList.remove('border-danger')
    } else {
        errorAlert.classList.remove('d-block')
        errorAlert.classList.add('d-none')

        // remove red border
        event.target.classList.remove('border')
        event.target.classList.remove('border-danger')
    }
})