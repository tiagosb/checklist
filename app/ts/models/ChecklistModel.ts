class ChecklistModel
{
    private _taskList: TaskModel[];
    
    constructor()
    {
        this._taskList = [];
    }
    
    public addTask(description: string): boolean
    {   
        try
        {
            this._taskList.push( new TaskModel(description, this._uid()) );
            return true;
        }
        catch(error)
        {
            console.log(error);
            return false;
        }
    }
   
    public alterTask(id: string, newDescription: string, newStatus: boolean): boolean
    {
        console.log('Alter task');
        try
        {
            let index = this._indexOf(id);
            if(index < 0)
            { 
                throw new Error("Can't alter task, index error, value="+index);
            }
            this._taskList[index].description = newDescription;
            this._taskList[index].status = newStatus; 
            return true;
        }
        catch(error)
        {
            console.log(error);
            return false;
        }
    };
    
    public removeTask(id: string):boolean
    {
        try
        {
            let newList = this._taskList.filter(task =>
                {
                    return !(task.id === id)
                });
            if(!newList)
            {
                throw new Error("Can't remove the task");
            }
            this._taskList = newList;
            return true;
        }
        catch(Error)
        {
            console.log(Error);
            return false;
        }
    };    
    
    private _indexOf(id: string): number
    {
        for(let index = 0; index < this._taskList.length; index++)
        {
            if( this._taskList[index].id === id )
            {
                return index;
            }
        }
        return -1;
    }

    private _uid():string
    {
        return '_' + Math.random().toString(36).substr(2, 9);
    } 

    get taskList():TaskModel[]
    {
        return this._taskList;
    }

    public getTaskById(id:string):any
    {
        try
        {
            let index = this._indexOf(id);
            return this.taskList[index];
        }
        catch(error)
        {
            console.log(error);
            return false
        }
    }

    public taskStatusChange(id:string)
    {
        let task = this.getTaskById(id);
        let status = task.status ? false : true;
        this.alterTask(id, task.description, status);
        console.log(this._taskList);
    }
}