class TaskModel {
    constructor(description, id = '', status = false) {
        this._description = description;
        this._id = id;
        this._status = status;
    }
    get getId() { return this._id; }
    get getDescription() { return this._description; }
    get getStatus() { return this._status; }
    set setDescription(newDescription) {
        this._description = newDescription;
    }
    set setStatus(newStatus) {
        this._status = newStatus;
    }
}
