import {EventEmitter} from "events";

class membersStore extends EventEmitter{
    constructor(){
        super();
        this.members=[
                {
                    id:1224532,
                    email:"victoria@gmail.com",
                    password:"amvictoria",
                    task:{
                            task1:"Go to school",
                            task2:"Go to the Library"
                        }
                },
                {
                    id:2313345,
                    email:"belinda@yahoo.com",
                    password:"bElINdA",
                    task:{
                            task1:"Leave for work",
                            task2:"Go home later on"
                        }
                },
        ];
    }
    getAllMembers(){
        return this.members;
    }    
}

var membersStorage=new membersStore;

export default membersStorage;