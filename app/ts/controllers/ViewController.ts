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
        let t1Id = this._checkListModel.taskList[0].id;
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
    
    public action(event)
    {
        let target = event.target;
        //Checkbox event, change task status
        if(target.tagName.toUpperCase() === 'INPUT')
        {
            console.log('Change status.');

        }
        //If target contains the class bnt-remove then action is remove task
        else if(target.classList.contains('btn-remove'))
        {
            //Confirm the action
            if(this._checkListView.confirmRemove())
            {
                this._checkListModel.removeTask(target.id);
                this.updateView();
            }
        }
        //class btn-alter -> action alter task
        else if(target.classList.contains('btn-alter'))
        {
            console.log('Alter task');
            let id = target.id;
            let task = this._checkListModel.getTaskById(id);
            let newDescription = this._checkListView.alterTaskForm(task.description);
            if(newDescription)
            {
                this._checkListModel.alterTask(task.id, newDescription, task.status);
            }            
            this.updateView();
        }
    }
}