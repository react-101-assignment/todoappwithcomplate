import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/styles.module.css'

const TodoList = ({tasks,handelDelete,handleDataComplate}) => {
  const [complate, setComplate] = useState('');

  return (
    <div className={styles.list}>
      {tasks.map((text)=>(
       
        <div key={uuidv4()}  className={styles.listitems}>
           <input type="checkbox" onChange={()=>{setComplate(text)
          }}
          onClick={()=> handleDataComplate(text)}
          />
          <p className={styles.startText}>{text}</p>
        <button onClick={()=>handelDelete(text)}>Delete</button></div>
      ))}
    </div>
  )
}

export default TodoList
