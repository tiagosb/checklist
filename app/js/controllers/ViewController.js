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
        let t1Id = this._checkListModel.taskList[0].getId;
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
        //If target contains the class bnt-remove then action is remove task
        if (event.target.classList.contains('btn-remove')) {
            this._checkListModel.removeTask(event.target.id);
            this.updateView();
        }
    }
}
