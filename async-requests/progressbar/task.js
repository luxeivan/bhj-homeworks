class Preloader {
    constructor() {
        this.progress = document.querySelector('#progress');
        this.form = document.querySelector('#form');
        this.form.addEventListener('submit', event =>{
            let formData = new FormData(this.form);
            let xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
            xhr.upload.onprogress = (event => {
                this.progress.value = event.loaded / event.total;
            }).bind(this);
            xhr.send(formData);
            event.preventDefault();        
        });
    }        
}
new Preloader();