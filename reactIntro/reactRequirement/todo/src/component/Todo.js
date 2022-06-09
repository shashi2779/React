import React, { Component } from 'react'

export class Todo extends Component {
    constructor(){
        super()
        this.state={
            tasks:[],
            currentTask:''
        }
    }

    txtHandle = (e)=>{
       console.log(e.target.value)
       this.setState({
        currentTask:e.target.value
       })
    }

    handleText = ()=>{
        this.setState({
            tasks:[...this.state.tasks,{task:this.state.currentTask,id:this.state.tasks.length+1}],
            currentTask:''
        })
        
    }

    handledelete=(id)=>{
      let narr=  this.state.tasks.filter((taskobj)=>{
           return taskobj.id != id
        })
       
        this.setState({
            tasks:[...narr]
        })
    }
  
  render() {
    return (
      <div>
        <input value={this.state.currentTask} onChange={this.txtHandle} type='text'/>
        <button onClick={this.handleText}>add task</button>
        <ul>
            {
             this.state.tasks.map((taskobj)=>(
                 <li>
                     <p>{taskobj.task}</p>
                     <button onClick={()=>this.handledelete(taskobj.id)}>delete</button>
                 </li>
             ))  
            }
        </ul>
      </div>  
    )
  }
}

export default Todo