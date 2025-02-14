class Auth {
    constructor() {
        this.signin =document.querySelector('#signin');
        this.signinForm = document.querySelector('#signin__form');
        this.welcome = document.querySelector('#welcome');
        this.userIdArea = document.querySelector('#user_id');
        this.unsigninBtn = document.querySelector('#unsignin__btn');
        this.beenAuth(); 
        this.signinForm.addEventListener('submit', event => {
            event.preventDefault();
            let formData = new FormData(this.signinForm);
            let xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
            xhr.send(formData);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    console.log(JSON.parse(xhr.responseText));
                    if (JSON.parse(xhr.responseText).success) {
                        localStorage.userID = JSON.parse(xhr.responseText).user_id;
                    }else{
                        this.signinForm.reset();
                        alert('Неправильный логин/пароль');
                    }

                };
                this.beenAuth();               
            };

        });
        this.unsigninBtn.addEventListener('click',event =>{
            localStorage.removeItem('userID');
            this.welcome.classList.remove('welcome_active');
            this.signin.classList.add('signin_active');
        });
    }
    beenAuth(){
        if (localStorage.userID) {
            this.userIdArea.textContent = localStorage.userID;
            this.signin.classList.remove('signin_active');
            this.welcome.classList.add('welcome_active');
            this.signinForm.reset();
        }
    }
}
new Auth();