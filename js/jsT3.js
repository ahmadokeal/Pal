let inpTask = document.querySelector('#T-task');
let btn_add_t = document.querySelector('.cladd');
let task_p = document.querySelector('.tasks');
let tasks = [];
inpTask.addEventListener('keyup', (e) => {
    if (e.key == 'Enter') {
        btn_add_t.click();
    };
});
if (localStorage.getItem('tasksM')) {
    tasks = JSON.parse(localStorage.getItem('tasksM'));
};
// if (localStorage.getItem('tasksM') != '') {
//     tasks = JSON.parse(window.localStorage.getItem('taskM'));
// }
getTsLS()
btn_add_t.onclick = function () {
    if (inpTask.value != '') {
        addTArr(inpTask.value);
        inpTask.value = '';
    };
};
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('D-t')) {
        DelTLS(e.target.parentElement.getAttribute('data-id'));
        e.target.parentElement.remove();
        // console.log(e.target.parentElement.dataset.id)
    };
    if (e.target.classList.contains('task')) {
        toggleSCT(e.target.getAttribute('data-id'))
        e.target.classList.toggle('done');
    }
});
function addTArr(taskTxt) {
    const task = {
        id: Date.now(),
        title: taskTxt,
        complated: false,
    };
    tasks.push(task);
    addElPF(tasks);
    addTsLS(tasks)
};
function addElPF(arraTask) {
    task_p.innerHTML = '';
    arraTask.forEach(task => {
        let div = document.createElement('div');
        div.classList.add('task');
        if (task.complated) {
            task.classList.add('done');
        }
        div.setAttribute('data-id', task.id);
        div.appendChild(document.createTextNode(task.title));
        let D_task = document.createElement('button');
        D_task.classList.add('btn');
        D_task.classList.add('btn-danger');
        D_task.classList.add('D-t');
        D_task.appendChild(document.createTextNode('delete'));
        div.appendChild(D_task);
        task_p.appendChild(div);
    });
};
function addTsLS(tasks) {
    window.localStorage.setItem('tasksM', JSON.stringify(tasks))
};
function getTsLS() {
    let data = window.localStorage.getItem('tasksM');
    if (data) {
        let tasks = JSON.parse(data);
        addElPF(tasks);
    };
};
function DelTLS(taskId) {
    // for (let i = 0; i < tasks.length; i++) {
    //     console.log(`${tasks[i].id} === ${taskId}`)
    // }
    tasks = tasks.filter((task) => task.id != taskId)
    addTsLS(tasks);
};
function toggleSCT(taskId) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == taskId) {
            tasks[i].complated == false ? (tasks[i].complated = true) : (tasks[i].complated = false)
        }
    }
    addTsLS(tasks);
}