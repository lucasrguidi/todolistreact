import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, setTasks, search, filter }) => {
  function deleteTask(id) {
    const filteredTasks = tasks.filter((task) => (task.id != id ? task : null));
    setTasks(filteredTasks);

    localStorage.setItem('taskData', JSON.stringify(filteredTasks))
  }

  function completeTask(id) {
    const mappedTasks = tasks.map((task) => {
      if (task.id != id) {
        return task;
      } else {
        return { ...task, completed: !task.completed };
      }
    });
    setTasks(mappedTasks);

    localStorage.setItem('taskData', JSON.stringify(mappedTasks))
  }

  return (
    <div className="d-flex flex-column gap-3 py-3">
      {tasks
        .filter((task) =>
          task.title.toLowerCase().includes(search.toLowerCase()),
        )
        .filter((task) =>
          filter === 'Todos' ? task : filter === task.category,
        )
        .map((task) => (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        ))}
        {!tasks.length && <div className="alert alert-primary container-width text-center m-auto" role="alert">
  Lista de tarefas vazia.<br /> Comece a adicionar!
</div>}
    </div>
  );
};

export default TaskList;
