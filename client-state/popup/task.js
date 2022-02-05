class Popup {
    constructor() {
        this.subscribeModal = document.querySelector('#subscribe-modal');
        this.modalClose = document.querySelector('.modal__close');
        this.modalClose.addEventListener('click', () => {
            document.cookie = "closeModal=1";
            this.subscribeModal.classList.remove('modal_active');
        });
        if (this.getCookie('closeModal')) {
            this.subscribeModal.classList.remove('modal_active');
        } else {
            this.subscribeModal.classList.add('modal_active');
        }

    }
    getCookie(name) {
        const value = "; " + document.cookie;
        let parts = value.split("; " + name + "=");
        if (parts.length === 2) {
            return parts.pop().split(";").shift();
        }
    }
}
new Popup();