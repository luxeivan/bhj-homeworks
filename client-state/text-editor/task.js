class TextEditor {
    constructor() {
        this.textArea = document.querySelector('#editor');
        this.erase = document.querySelector('#erase');
        this.textArea.value = localStorage.textArea;
        this.textArea.addEventListener('input', () => {
            localStorage.textArea = this.textArea.value;
        });
        this.erase.addEventListener('click', () => {
            localStorage.textArea = this.textArea.value = '';
        });
    }
}
new TextEditor();