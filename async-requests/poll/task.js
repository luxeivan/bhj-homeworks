class Poll {
    constructor() {
        this.pollTitle = document.querySelector('#poll__title');
        this.pollAnswers = document.querySelector('#poll__answers');
        this.getRequest();
    }
    getRequest() {
        let xhr = new XMLHttpRequest();// экземпляр объекта XMLHttpRequest
        xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');// создаем асинхронный запрос
        xhr.send();// отправляем запрос
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                this.renderResult(JSON.parse(xhr.responseText).data);
            };
        };
    }
    renderResult(poll) {
        this.pollTitle.innerHTML = poll.title;
        this.pollAnswers.innerHTML = '';
        for (const item of poll.answers) {
            this.pollAnswers.insertAdjacentHTML("beforeEnd", `
             <button class="poll__answer">
            ${item}
            </button>            
            `);
        }
        this.addEventButton();
    }
    addEventButton() {
        const pollButtons = document.querySelectorAll('.poll__answer');
        for (const button of pollButtons) {
            button.addEventListener('click', () => {
                alert('Спасибо, Ваш голос засчитан!');
                this.getRequest();
            });
        }
    }
}
new Poll()