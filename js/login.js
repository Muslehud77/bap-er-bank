const login = document.getElementById('login');
const email = document.getElementById('email');
const password = document.getElementById('password');

login.addEventListener('click', function(){
  if (email.value === 'baperbank@gmail.com' && password.value === '123123'){
       location.href = "./Bank.html";
  }
  else if(email.value === '' || password.value === ''){
          alert('Please input your email and password');
    }
   else{
         alert('User email or password is incorrect');
    }
});