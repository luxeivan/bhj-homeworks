/* class AddTask {
    constructor() {
        this.taskInput = document.querySelector('#task__input');
        this.tasksAdd = document.querySelector('#tasks__add');
        this.tasksList = document.querySelector('#tasks__list');
        this.addTask();
    }
    addTask() {
        this.tasksAdd.addEventListener('click', event => {
            event.preventDefault();
            window.localStorage.setItem(window.localStorage.length, `<div class="task">
            <div class="task__title">
                ${this.taskInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
          </div>`);
            this.tasksList.insertAdjacentHTML('beforeEnd', `<div class="task">
            <div class="task__title">
                ${this.taskInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
          </div>`);
            this.taskInput.value = '';
            this.addEventRemoveTask();
        });
    }
    addEventRemoveTask() {
        this.allTasks = document.querySelectorAll('.task__remove');
        console.log(localStorage);
        for (const taskRemove of this.allTasks) {
            taskRemove.addEventListener('click', event => {
                event.target.closest('.task').remove();
            });
        }
    }
}
new AddTask(); */
class AddTask {
    constructor() {
        this.taskInput = document.querySelector('#task__input');
        this.tasksAdd = document.querySelector('#tasks__add');
        this.tasksList = document.querySelector('#tasks__list');
        this.renderTasks();
        this.addTask();
    }
    addTask() {
        this.tasksAdd.addEventListener('click', event => {
            event.preventDefault();
            window.localStorage.setItem(this.taskInput.value, `<div class="task">
            <div class="task__title">
                ${this.taskInput.value}
            </div>
            <a href="#" data-item="${this.taskInput.value}" class="task__remove">&times;</a>
          </div>`);
            this.taskInput.value = '';
            this.renderTasks();
        });
    }
    renderTasks() {
        this.tasksList.innerHTML = '';
        let keys = Object.keys(window.localStorage);
        for (let key of keys) {
            this.tasksList.insertAdjacentHTML('beforeEnd', window.localStorage.getItem(key));
        }
        /* for (let i = 0; i < window.localStorage.length; i++) {
            this.tasksList.insertAdjacentHTML('beforeEnd', window.localStorage.getItem(i));
        } */
        this.addEventRemoveTask();
    }
    addEventRemoveTask() {
        this.allTasks = document.querySelectorAll('.task__remove');
        
        for (const taskRemove of this.allTasks) {
            taskRemove.addEventListener('click', event => {
                window.localStorage.removeItem(event.target.dataset.item);
                this.renderTasks();
                //event.target.closest('.task').remove();
            });
        }
    }
}
new AddTask();