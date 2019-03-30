class ChecklistView {
    constructor() {
        this._view = document.querySelector('#taskView');
    }
    _template(taskList) {
        //!important! class btn-remove used to identify the remove button
        return `
            <ul>
                ${taskList.map(task => {
            return `
                            <li>
                                <input type="checkbox" ${task.getStatus ? 'checked' : ''}/>
                                ${task.getDescription}
                                <button class="btn-remove" id="${task.getId}">Remover</button>
                                <button class="btn-alter" id="${task.getId}">Alterar</button>
                            </li>
                        `;
        }).join('')}
            </ul>
        `;
    }
    renderTemplate(taskList) {
        this._view.innerHTML = this._template(taskList);
    }
    alterTaskForm(description) {
        return prompt('Descrição:', description);
    }
    confirmRemove() {
        return confirm('Excluir a tarefa?');
    }
}
