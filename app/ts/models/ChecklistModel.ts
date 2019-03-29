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
            let id = this._uid();
            let newTask = new TaskModel(description, id);
            this._taskList.push( newTask );
            return true;
        }
        catch(Error)
        {
            console.log(Error);
            return false;
        }
    }
   
    public alterTask(id: string, newDescription: string, newStatus: boolean): boolean
    {
        let index = this._indexOf(id);
        if( index < 0 )
        {
            return false;
        }
        this._taskList[index].setDescription = newDescription;
        this._taskList[index].setStatus = newStatus; 
        return true;
    };
    
    public removeTask(id: string):boolean
    {
        try
        {
            let newList = this._taskList.filter(task =>
                {
                    return !(task.getId === id)
                });
            if( newList )
            {
                this._taskList = newList;
            }
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
            if( this._taskList[index].getId === id )
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
}