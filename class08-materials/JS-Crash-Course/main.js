const myForm =  document.querySelector('#my-Form');
const nameImput =  document.querySelector('#name');
const emailInput =  document.querySelector('#email');
const msg =  document.querySelector('#.msg');
const userList =  document.querySelector('#users');

myform.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    console.log(nameInput.value);
}