class ChecklistView{
    
    private _view: Element;
    
    constructor()
    {
        this._view = document.querySelector('#taskView');
    }

    private _template(taskList: TaskModel[]):string
    {
        //!important! class btn-remove used to identify the remove button
        return `
            <ul>
                ${taskList.map(task=>
                    {
                        return `
                            <li>
                                <input type="checkbox" ${task.getStatus ? 'checked' : ''}/>
                                ${task.getDescription}
                                <button class="btn-remove" id="${task.getId}">Remover</button>
                            </li>
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