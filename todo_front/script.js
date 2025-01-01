const API_URL = 'http://127.0.0.1:8000/tasks';

async function fetchTasks() {
    const response = await fetch(API_URL)
    const tasks = await response.json()
    renderTasks(tasks)
}

function renderTasks(tasks){
    const taskList = document.getElementById('taskList')
    taskList.innerHTML = ''
    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.textContent = task.title;
        if (task.completed){
            li.classList.add('completed')
        }else{
            li.classList.remove('completed');
        }
        const completeBtn = document.createElement('button')
        completeBtn.textContent = task.completed ? 'Undo': 'Done'
        completeBtn.onclick = () => 
            toggleComlpete(task.id, task.title, !task.completed);

        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete'
        deleteBtn.onclick = () => deleteTask(task.id);
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

async function toggleComlpete(task_id, t, c) {
    await fetch(`${API_URL}/${task_id}`, {
        method:'PUT',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({id: task_id, title: t, completed: c}),
    });
    fetchTasks();
}

async function addTask() {
    const taskInput = document.getElementById('taskInput');
    if (taskInput.value.trim()){
        await fetch(API_URL, {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({id: 1, title: taskInput.value, completed: false}),
        });
        taskInput.value = '';
        fetchTasks();
    }
}

async function deleteTask(task_id) {
    await fetch(`${API_URL}/${task_id}`, {
        method:'DELETE',
    });
    fetchTasks();
}

document.getElementById('addTaskButton').addEventListener('click', addTask);

fetchTasks();