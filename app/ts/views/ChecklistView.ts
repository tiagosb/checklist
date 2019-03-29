class ChecklistView{
    
    private _view: Element;
    
    constructor()
    {
        this._view = document.querySelector('#taskView');
    }

    private _template(taskList: TaskModel[]):string
    {
        return `
            <ul>
                ${taskList.map(task=>
                    {
                        return `
                            <li>${task.getDescription}</li>
                        `
                    }
                ).join('')}
            </ul>
        `;
    }

    public renderTemplate(taskList: TaskModel[])
    {
        this._view.innerHTML = this._template(taskList);
    }
}