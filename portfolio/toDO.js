//with check upgrade
const toDo = {}

const statuses = {
    IN_PROGRESS:'in progress',
    DONE:'done',
    TO_DO:'to do'
}

function addTask (task) {
    toDo[task] = statuses.DONE
}

function deleteTask (task) {
    delete toDo[task]
}

function changeStatus(task,status) {
    toDo[task] = status
}

function showList () {
    console.log('To do:')
    for(let key in toDo) {
        if(statuses.TO_DO == toDo[key]) {
            console.log(' ' + key)
        }
    }

    console.log('In progress:')
    for(let key in toDo) {
        if(statuses.IN_PROGRESS == toDo[key]) {
            console.log(' ' + key)
        }
    }

    console.log('Done:')
    for(let key in toDo) {
        if(statuses.DONE == toDo[key]) {
            console.log(' ' + key)
        }
    }
}




addTask('make bed')
addTask('create a new practice task')
addTask('write a post')
addTask('do homework')

changeStatus('write a post',statuses.TO_DO)
changeStatus('create a new practice task',statuses.IN_PROGRESS)

deleteTask('do homework')

showList ()





