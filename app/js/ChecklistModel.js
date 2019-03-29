class ChecklistModel {
    constructor() {
        this._taskList = [];
    }
    addTask(description) {
        try {
            let id = this._uid();
            let newTask = new TaskModel(description, id);
            this._taskList.push(newTask);
            return true;
        }
        catch (Error) {
            console.log(Error);
            return false;
        }
    }
    alterTask(id, newDescription, newStatus) {
        let index = this._indexOf(id);
        if (index < 0) {
            return false;
        }
        this._taskList[index].setDescription = newDescription;
        this._taskList[index].setStatus = newStatus;
    }
    ;
    removeTask(id) {
        try {
            let newList = this._taskList.filter(task => {
                return !(task.getId === id);
            });
            if (newList) {
                this._taskList = newList;
            }
            return true;
        }
        catch (Error) {
            console.log(Error);
            return false;
        }
    }
    ;
    _indexOf(id) {
        for (let index = 0; index < this._taskList.length; index++) {
            if (this._taskList[index].getId === id) {
                return index;
            }
        }
        return -1;
    }
    _uid() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
    get taskList() {
        return this._taskList;
    }
}
