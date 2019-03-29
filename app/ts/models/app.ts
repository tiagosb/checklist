let checklist = new ChecklistModel();
checklist.addTask('Fazer upload');
checklist.addTask('Testar a aplicação');
checklist.addTask('Criar os controllers');
let id = checklist.taskList[0].getId;
checklist.alterTask(id, 'Fazer upload para o GitHub', false);
console.log(checklist.taskList);
checklist.removeTask(id);
console.log(checklist.taskList);