import React, { useRef, useState } from 'react'
export default function Task() {
    let taskref = useRef()    
    const [taskarray,settaskarray] =useState([])
    const [taskui,settaskui]=useState()
    let Addtask=()=>
    {        
        if(taskarray.findIndex((task)=>task.taskname == (taskref.current.value))>=0)
        {
            alert("Task already present")
            return
        }
        let task = {taskname:taskref.current.value,taskstatus:"incomplete"}
        taskarray.push(task)
        taskref.current.value=""
        showtask()
    }
    let showtask=()=>
    {
    let temparry = taskarray.map((t)=>{
        return <tr>
            <td>{t.taskname}</td>
            <td>{t.taskstatus}</td>
            <td><input type="button" value="Complete"></input></td>
            <td><input type="button" value="Delete" onClick={()=>deletetask(t.taskname)}></input></td>
            </tr>
            
    })    
    settaskui(temparry)
    }
    let deletetask =(taskname)=>
    {
       let index =  taskarray.findIndex((t)=>t.taskname==taskname)        
        taskarray.splice(index,1)
        showtask()
    }
  return (
    <div>
    <div>Enter  Task : <input type="text" ref={taskref}/> 
    <input type="button" value="Add" onClick={()=>Addtask()} /></div>
    
    <table>
        <thead>
        <tr><th>TaskName</th><th>Task Status</th>
         <th>Mark complete</th>
         <th>Delete </th></tr>
         </thead>
         <tbody>
         {taskui}
         </tbody>
    </table>
    </div>
      )
}
