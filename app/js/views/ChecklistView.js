class ChecklistView {
    constructor() {
        this._view = document.querySelector('#taskView');
    }
    _template(taskList) {
        return `
            <ul>
                ${taskList.map(task => {
            return `
                            <li>
                                <input type="checkbox" ${task.getStatus ? 'checked' : ''}/>
                                ${task.getDescription}
                            </li>
                        `;
        }).join('')}
            </ul>
        `;
    }
    renderTemplate(taskList) {
        this._view.innerHTML = this._template(taskList);
    }
}
