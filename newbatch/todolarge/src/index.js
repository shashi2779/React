import React from 'react'
import  ReactDOM  from 'react-dom'
import './index.css'


class AddTask extends React.Component{
    render(){
        return(
            <form>
                <input type="text"/>
                <input type="button" value="Add Task"/>
            </form>
        )
    }
}


class TaskList extends React.Component{

    constructor(){
        super()
        
    }

    render(){

        let list=[]
        //parent(state) se data bheja child(props) me recieve kiya
        for(let i=0;i<this.props.tasks.length;i++){
            
                let task = this.props.tasks[i]
                
                let spanAction;
                if(task.isFinished){
                    spanAction = (
                        <span class="material-icons-outlined">close</span>
                    )
                }else{
                    spanAction = (
                        <span class="material-icons-outlined">done</span>
                    )
                }


                 let listItem = (
                 <li key={i}>
                    {task.desc}
                    {spanAction}
                    {<div>ppp</div>}
                    </li>
                    
                 )
                 list.push(listItem)
            
        }

        return(
            <>
              <div className={this.props.forStyling}>
                <div>{this.props.purpose}</div>
            
                 <ul>
                   {list}
                 </ul>
                  
              </div>
            </>
        )
    }
}


class App extends React.Component{

    constructor(){
        super()
        this.state={
            tasks:[{
                desc:'switch of light',
                isFinished:false
            },
            {
                desc:'turn on fan',
                isFinished:true
            },
            {
                desc:'make tea',
                isFinished:false
            },
            {
                desc:'make dinner',
                isFinished:true
            } ]
        }
    }


    render(){
       // state se sara tasks nikal liya render me 
        let tasks = this.state.tasks
        let todoTasks = tasks.filter(t => t.isFinished == false)
        let doneTasks = tasks.filter(t => t.isFinished == true)

      return(
        <>
        <div className='add-task'>
           <AddTask/>
        </div>

        <div className='task-list'>
           <TaskList tasks={todoTasks} purpose='todo' forStyling='todo'/>
           <TaskList tasks={doneTasks} purpose='finished' forStyling='finished' />
        </div>
         
         </>
       )
    }
}

ReactDOM.render(<App/>,document.getElementById("root"))