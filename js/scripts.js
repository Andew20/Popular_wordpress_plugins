// Получаем элементы формы и списка задач
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Обработчик события добавления задачи
taskForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    const taskText = taskInput.value.trim(); // Получаем и очищаем текст задачи

    if (taskText !== '') {
        addTask(taskText); // Добавляем задачу
        taskInput.value = ''; // Очищаем поле ввода
    }
});

// Функция добавления задачи в список
function addTask(taskText) {
    // Создаем новый элемент списка
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `
        <span>${taskText}</span>
        <span class="delete-task">&times;</span>
    `;

    // Добавляем элемент в список задач
    taskList.appendChild(li);

    // Добавляем обработчик события для удаления задачи
    li.querySelector('.delete-task').addEventListener('click', function() {
        taskList.removeChild(li); // Удаляем элемент из списка
    });
}
