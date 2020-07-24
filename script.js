console.log("This is Project 4 by Joshi Saurabh");

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validEmail = false;
let validPhone = false;
let validUser = false;
$('#success').hide();
$('#failure').hide();

// console.log(name,email,phone);

name.addEventListener('blur', () => {
  console.log("Name is blurred!");
  // validate name is here
  let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
  let str = name.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("your name is valid");
    name.classList.remove('is-invalid');
    validUser = true;
  }
  else {
    console.log("your name is invalid");
    name.classList.add('is-invalid');
    validUser = false;
  }

})
email.addEventListener('blur', () => {
  console.log("Email is blurred!");
  // validate email is here
  let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
  let str = email.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("your email is valid");
    email.classList.remove('is-invalid');
    validEmail = true;

  }
  else {
    console.log("your email is invalid");
    email.classList.add('is-invalid');
    validEmail = false;
  }

})
phone.addEventListener('blur', () => {
  console.log("Phone is blurred!");
  // validate phone is here
  let regex = /^([0-9]){10}$/;
  let str = phone.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("your phone is valid");
    phone.classList.remove('is-invalid');
    validPhone = true;
  }
  else {
    console.log("your phone is invalid");
    phone.classList.add('is-invalid');
    validPhone = false;
  }

})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
  e.preventDefault();
  console.log("You clicked on submit");
  console.log(validEmail, validUser, validPhone);
  // Submit your form here
  if (validEmail && validUser && validPhone) {
    let failure = document.getElementById('failure');
    console.log("Phone,email and user are valid.Submitting the form");
    let success = document.getElementById('success');
    success.classList.add('show');
    // failure.classList.remove('show');
    // $(`#failure`).alert('close');
    $('#failure').hide();
    $('#success').show();
  }
  else {
    console.log("Phone,email and user are not valid.Hence not  submitting the form.Please correct the errors and try again");
    let failure = document = document.getElementById('failure');
    failure.classList.add('show');
    // success.classList.remove('show');
    // $(`#success`).alert('close');
    $('#success').hide();
    $('#failure').show();

  }
})
