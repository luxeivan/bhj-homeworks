class Preloader {
    constructor() {
        this.coursesList = document.querySelector('#items');
        this.loader = document.querySelector('#loader');
        this.getRequest();
    }
    getRequest() {
        let xhr = new XMLHttpRequest();// экземпляр объекта XMLHttpRequest
        xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');// создаем асинхронный запрос
        xhr.send();// отправляем запрос
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                this.renderResult(JSON.parse(xhr.responseText).response.Valute);
            };
        };
    }
    renderResult(courses) {
        this.loader.classList.remove('loader_active');
        for (const key in courses) {
            this.coursesList.insertAdjacentHTML("beforeEnd", `
        <div class="item">
            <div class="item__code">
                ${courses[key].CharCode}
            </div>
            <div class="item__value">
                ${courses[key].Value}
            </div>
            <div class="item__currency">
                руб.
            </div>
        </div>`
            )
        }
    }
}
new Preloader()