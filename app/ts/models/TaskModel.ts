class TaskModel
{
    private _id: string;
    protected _description: string;
    protected _status: boolean;

    public constructor(description:string, id:string = '', status:boolean = false)
    {    
        this._description = description;
        this._id = id;
        this._status = status;
    }

    get getId():string{ return this._id; }

    get getDescription():string{ return this._description; }

    get getStatus():boolean{ return this._status; }
    
    set setDescription(newDescription:string)
    {
        this._description = newDescription;
    }

    set setStatus(newStatus:boolean)
    {
        this._status = newStatus;
    }
}