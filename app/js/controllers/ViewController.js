class ViewController {
    constructor() {
        this._checkListView = new ChecklistView();
        this._checkListModel = new ChecklistModel();
        this._testSeed();
    }
    updateView() {
        let html = this._checkListView.renderTemplate(this._checkListModel.taskList);
        console.log(html);
    }
    _testSeed() {
        this._checkListModel.addTask('Tarefa 1');
        this._checkListModel.addTask('Tarefa 2');
        this._checkListModel.addTask('Tarefa 3');
        this._checkListModel.addTask('Tarefa 4');
    }
}
