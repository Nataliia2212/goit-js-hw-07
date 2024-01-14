const btnElem = document.querySelector('button');
const formElem = document.querySelector('form.login-form');

function onSubmit(event) {
   event.preventDefault();
   const email = formElem.elements.email.value.trim();
   const password = formElem.elements.password.value.trim();
  
   if (!email || !password) {
      return alert('All form fields must be filled in')
   }
  
   formElem.reset();
   return console.log({email, password})
}

formElem.addEventListener('submit', onSubmit);
