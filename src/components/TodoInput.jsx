import React, { useState } from "react";
import styles from '../styles/styles.module.css'

const TodoInput = ({ getEnterInput }) => {
  const [value, setValue] = useState('');

  return (
    <div>
      <div className={styles.input}>
        <input
          value={value}
          placeholder="Write........"
          onChange={(e) => {
              setValue(e.target.value);
          }}
        />
       <button onClick={()=>{getEnterInput(value);setValue('')}}>add</button>
      </div>
    </div>
  );
};

export default TodoInput;
