class ViewController{
    
    private _checkListView: ChecklistView;
    private _checkListModel: ChecklistModel;

    constructor()
    {
        this._checkListView = new ChecklistView();
        this._checkListModel = new ChecklistModel();
        this._testSeed();
    }

    public updateView()
    {
       this._checkListView.renderTemplate(this._checkListModel.taskList);
    }
    
    private _testSeed()
    {
        this._checkListModel.addTask('Tarefa 1');
        let t1Id = this._checkListModel.taskList[0].getId;
        this._checkListModel.alterTask(t1Id, 'Tarefa 1', true);
        this._checkListModel.addTask('Tarefa 2');
        this._checkListModel.addTask('Tarefa 3');
        this._checkListModel.addTask('Tarefa 4');

    }

    public newTask(event)
    {
        event.preventDefault();
        this._checkListModel.addTask(this._getInputDescription());
        this.updateView();
    }

    private _getInputDescription():string
    {
        let inputDescription = document.getElementById('inputDescription');
        let taskDescription:string = (<HTMLInputElement>inputDescription).value;
        (<HTMLInputElement>inputDescription).value = '';
        inputDescription.focus();
        return taskDescription;
    }
}