import React from "react";
import styles from "./addTask.module.css";
import { useState } from "react";

const AddTask = ({ addTodo }) => {
  // NOTE: do not delete `data-cy` key value pair
  const [value, setValue] = useState("");
  return (
    <div className={styles.todoForm}>
      <input
        value={value}
        placeholder="Add task..."
        onChange={(e) => {
          setValue(e.target.value);
        }}
        data-cy="add-task-input"
        type="text"
      />
      <button
        onClick={() => {
          addTodo(value);
          setValue("");
        }}
        data-cy="add-task-button"
      >
        add
      </button>
    </div>
  );
};

export default AddTask;
