import React,{useState} from 'react'
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoComplete  from "./TodoComplete";
import styles from '../styles/styles.module.css'

const TodoApp = () => {

const [tasks, setTasks] = useState([])
  const getEnterInput=(newTask)=>{
    setTasks([...tasks,newTask])
  }

  const handelDelete=(value)=>{
  setTasks(tasks.filter(el=> el!==value))
  }

const [complateMakeTrue, setComplateMakeTrue] = useState([])

const handleDataComplate=(newCom)=>{
  setComplateMakeTrue([...complateMakeTrue,newCom])
   setTasks(tasks.filter(el=> el!==newCom))
}
// const complateDelete=(value)=>{
//   setTasks(complateMakeTrue.filter(el=> el!==value))
// }
  
  return (
    <div className={styles.main}>
      <h1>TodoApp</h1>
      <div>
        <TodoInput  getEnterInput={getEnterInput} className={styles.input} />
      </div>
     

      <div>
        <TodoList tasks={tasks} handelDelete={handelDelete} handleDataComplate={handleDataComplate}/>
      </div>
      <div>
        <TodoComplete complateMakeTrue={complateMakeTrue} />
      </div>
    </div>
  )
}

export default TodoApp