import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from '../styles/styles.module.css'

const TodoComplete = ({ complateMakeTrue }) => {
  
  const handlestatus=(status)=>{
    status=true;
  }
  return (
    <div>
      <h1>Complete</h1>
      <div className={styles.list} style={{'overflow':'scroll','background':'green','opacity':'0.6'} }>
        {complateMakeTrue.map((el) =>( 
          
          <div key={uuidv4()} className={styles.listitems}>
          <input type="checkbox" onChange={(e)=>handlestatus(e.target.checked)} checked/>
      <p className={styles.startText} style={{ 'textDecoration':'line-through','color':'green'}}>{el}</p>
      <button >Delete</button>
        </div>
        )
          
          )}

      
      </div>
    </div>
  );
};

export default TodoComplete;
