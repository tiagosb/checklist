class ViewController {
    constructor() {
        this._checkListView = new ChecklistView();
        this._checkListModel = new ChecklistModel();
        this._testSeed();
    }
    updateView() {
        this._checkListView.renderTemplate(this._checkListModel.taskList);
    }
    _testSeed() {
        this._checkListModel.addTask('Tarefa 1');
        let t1Id = this._checkListModel.taskList[0].id;
        this._checkListModel.alterTask(t1Id, 'Tarefa 1', true);
        this._checkListModel.addTask('Tarefa 2');
        this._checkListModel.addTask('Tarefa 3');
        this._checkListModel.addTask('Tarefa 4');
    }
    newTask(event) {
        event.preventDefault();
        this._checkListModel.addTask(this._getInputDescription());
        this.updateView();
    }
    _getInputDescription() {
        let inputDescription = document.getElementById('inputDescription');
        let taskDescription = inputDescription.value;
        inputDescription.value = '';
        inputDescription.focus();
        return taskDescription;
    }
    action(event) {
        let target = event.target;
        //Checkbox event, change task status
        if (target.tagName.toUpperCase() === 'INPUT') {
            console.log('Change status.');
        }
        else if (target.classList.contains('btn-remove')) {
            //Confirm the action
            if (this._checkListView.confirmRemove()) {
                this._checkListModel.removeTask(target.id);
                this.updateView();
            }
        }
        else if (target.classList.contains('btn-alter')) {
            console.log('Alter task');
            let id = target.id;
            let task = this._checkListModel.getTaskById(id);
            let newDescription = this._checkListView.alterTaskForm(task.description);
            if (newDescription) {
                this._checkListModel.alterTask(task.id, newDescription, task.status);
            }
            this.updateView();
        }
    }
}
