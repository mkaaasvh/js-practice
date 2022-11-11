// const list = [ 
// { name: 'create a post', 
// status: 'In progress', 
// priority: 'low'  }, 

// { name: 'test', 
// status: 'Done', 
// priority: 'high'  } 
// ] 

const STATUSES = {
    IN_PROGRESS: 'in progress',
    DONE: 'done',
    TO_DO: 'to do'
}

const PRIORITY = {
    LOW: 'low',
    HIGH: 'high'
}

const toDo = []

function addTask(task) {
    toDo.push({
        name:task,
        status:STATUSES.DONE,
        priority:PRIORITY.HIGH
    })
}

function changeStatus (name, status) {
    let newStatus = toDo.find((elem) => elem.name == name);

    if (newStatus) {
        newStatus.status = status;
    } 
}

function changePriority (name,priority) {
    let newPriority = toDo.find((elem) => elem.name == name);

    if(newPriority) {
        newPriority.priority = priority
    }
}

function deleteTask (name) {
    let removeTask = toDo.findIndex((elem) => elem.name == name)

    if(removeTask != -1) {
        toDo.splice(removeTask, 1)//1 - название элем 2- кол-во
    }
}

function showList(typeOfTask) {
    let todo = '';
    let inProgress = '';
    let done = '';

    let high = '';
    let low = '';
    
    if (typeOfTask === 'status') {
        const statusList = toDo.filter(function (elem) {
            if (elem.status === STATUSES.TO_DO) {
                todo += `'${elem.name}'\n\t`;
            } 
    
            if (elem.status === STATUSES.IN_PROGRESS) {
                inProgress += `'${elem.name}'\n\t`;
            } 
    
            if (elem.status === STATUSES.DONE) {
                done += `'${elem.name}'\n\t`;
            } 
        });
    
        if (statusList) {
            console.log(`To Do:\n\t` + todo + `\nIn Progress:\n\t` + inProgress + `\nDone:\n\t` + done);
        } 
    }

    if (typeOfTask === 'priority') {
        const priorityList = toDo.filter(function (elem) {
            if (elem.priority === PRIORITY.HIGH) {
                high += `'${elem.name}'\n\t`;
            } 

            if(elem.priority === PRIORITY.LOW) {
                low += `'${elem.name}'\n\t`;
            }
        })

        if (priorityList) {
            console.log(`High:\n\t` + high + `\nLow:\n\t` + low);
        } 
    }
}


addTask('create a post')
addTask('test')
addTask('do homework')
addTask('do cleaning')
addTask('do washing')

changeStatus('create a post', STATUSES.IN_PROGRESS)
changeStatus('do cleaning',STATUSES.TO_DO)
changeStatus('do washing',STATUSES.IN_PROGRESS)

changePriority('create a post', PRIORITY.LOW)
changePriority('do washing',PRIORITY.LOW)

deleteTask('do homework')

showList('status')
showList('priority')



