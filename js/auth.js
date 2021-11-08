


const buttonAuth = document.querySelector('.button-auth'),
  modalAuth = document.querySelector('.modal-auth'),
  buttonOut = document.querySelector('.button-out'),
  userName = document.querySelector('.user-name'),
  closeAuth = document.querySelector('.close-auth'),
  logInForm = document.getElementById('logInForm'),
  inputLogin = document.getElementById('login'),
  inputPassword = document.getElementById('password'),
  errorLogin = document.querySelector('.error-login');
  
const login = (user) => {
  buttonAuth.style.display = 'none'

  buttonOut.style.display = 'flex'
  userName.style.display = 'flex'

  userName.textContent = user.login

  modalAuth.style.display = 'none'
  errorLogin.style.display = 'none';
}

const logout = () => {
  buttonAuth.style.display = 'flex'

  buttonOut.style.display = 'none'
  userName.style.display = 'none'
  userName.textContent = ''

  localStorage.removeItem('user')
}

buttonAuth.addEventListener('click', () => {
  modalAuth.style.display = 'flex'
  
})

closeAuth.addEventListener('click', () => {
  modalAuth.style.display = 'none'
})

buttonOut.addEventListener('click', () => {
  logout()
})


logInForm.addEventListener('submit', (event) => {
  event.preventDefault()
    const user = {
    login: inputLogin.value,
    password: inputPassword.value
  }
// *************
  if (inputLogin.value == "" || inputLogin.value.indexOf(' ') >= 0) {
   
    errorLogin.style.display = 'inline';

  } else {
    localStorage.setItem('user', JSON.stringify(user))
    login(user);
  }
// проверка логина
  
})

if (localStorage.getItem('user')) {
  login(JSON.parse(localStorage.getItem('user')));
}

