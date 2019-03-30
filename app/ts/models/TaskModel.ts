class TaskModel
{
    public id: string;
    public description: string;
    public status: boolean;

    public constructor(description:string, id:string = '', status:boolean = false)
    {    
        this.description = description;
        this.id = id;
        this.status = status;
    }
}