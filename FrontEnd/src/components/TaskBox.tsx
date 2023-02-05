import { useState } from 'react';
import { Task } from './Task';
import styles from './TaskBox.module.css';
import uuid from 'react-uuid';

interface TaskItens{
  id: string;
  content: string;
  isCompleted: boolean;
}

const taskTypes: TaskItens[] = [];

export function TaskBox() {  

  const [tasks, setTasks] = useState(taskTypes);

  const [completedTasks, setcompletedTasks] = useState(tasks.filter(task => {
    return task.isCompleted === true;
  }).length);

  function onChangeCheckTask(taskId: string){
    const updatingTask = tasks.map(task => {
      return task.id === taskId ? {...task, isCompleted: !task.isCompleted} : {...task}
    });

    setTasks(updatingTask);

    setcompletedTasks(updatingTask.filter(task => {
      return task.isCompleted === true;
    }).length)
  }

  function onDeleteTask(taskId: string) {
    const tasksWithoutDeletingOne = tasks.filter(task => {
      return task.id != taskId 
    });

    setTasks(tasksWithoutDeletingOne);

    setcompletedTasks(tasksWithoutDeletingOne.filter(task => {
      return task.isCompleted === true;
    }).length)
  }

  function onAddTask(content: string) {
    setTasks([...tasks, {id: uuid(),
                        content: content,
                        isCompleted: false}]);
  }

  return(
    <div>
     
     
    </div>
  )
}