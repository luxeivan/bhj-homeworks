class Chat {
    constructor() {
        this.chatSide = document.querySelector('.chat-widget__side');
        this.chatWindow = document.querySelector('.chat-widget');
        this.chatInput = document.querySelector('.chat-widget__input');

        this.chatSide.addEventListener('click', event => {
            this.chatWindow.classList.add('chat-widget_active');
        });
        this.chatInput.addEventListener('change', this.sendMessage.bind(this));

    }

    sendMessage() {
        const messages = document.querySelector('.chat-widget__messages');

        messages.innerHTML += `
<div class="message message_client">
<div class="message__time">${this.getDateNow()}</div>
<div class="message__text">
  ${this.chatInput.value}
</div>
</div>
`;
        this.chatInput.value = '';
        messages.scrollTop = messages.scrollHeight;
        this.sendRobot();
    }

    sendRobot() {
        const messages = document.querySelector('.chat-widget__messages');

        messages.innerHTML += `
<div class="message">
<div class="message__time">${this.getDateNow()}</div>
<div class="message__text">
  ${this.getWord()}
</div>
</div>
`;
    }

    getDateNow() {
        const dateNow = new Date();
        return dateNow.getHours() + ':' + (dateNow.getMinutes() < 10 ? '0' + dateNow.getMinutes() : dateNow.getMinutes());
    }

    getWord() {
        const words = [
            'bob',
            'awesome',
            'netology',
            'hello',
            'kitty',
            'rock',
            'youtube',
            'popcorn',
            'cinema',
            'love',
            'javascript'
        ],
            index = Math.floor(Math.random() * words.length);

        return words[index];
    }

}

let chat = new Chat();

