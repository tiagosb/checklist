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
                                <input type="checkbox" ${task.status ? 'checked' : ''}/>
                                ${task.description}
                                <button class="btn-remove" id="${task.id}">Remover</button>
                                <button class="btn-alter" id="${task.id}">Alterar</button>
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

    public alterTaskForm(description:string)
    {
        return prompt('Descrição:', description);
    }

    public confirmRemove()
    {
        return confirm('Excluir a tarefa?');
    }
}