import React from "react";
import AddTask from "./AddTask/AddTask";
import Task from "./Task/Task";

import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [todos, setTodos] = React.useState([]);
  const addTodo = (xyz) => {
    setTodos([...todos, xyz]);
  };
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader />
      <AddTask addTodo={addTodo} />
      <Task>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </Task>
      {/* Header */}
      {/* Add Task */}
      {/* Tasks */}
    </div>
  );
};

export default TaskApp;
