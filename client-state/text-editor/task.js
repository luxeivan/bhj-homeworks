class TextEditor {
    constructor() {
        this.textArea = document.querySelector('#editor');
        this.erase = document.querySelector('#erase');
        if(localStorage.textArea){
            this.textArea.value = localStorage.getItem('textArea');
        }
        this.textArea.addEventListener('input', () => {
            localStorage.textArea = this.textArea.value;
        });
        this.erase.addEventListener('click', () => {
            this.textArea.value = '';
            localStorage.removeItem('textArea');
        });
    }
}
new TextEditor();