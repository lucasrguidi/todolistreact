import './App.css';
import AddTask from './Components/AddTask';
import Filter from './Components/Filter';
import Search from './Components/Search';
import TaskList from './Components/TaskList';
import React from 'react';

function App() {
  const [tasks, setTasks] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [filter, setFilter] = React.useState('Todos');

  React.useEffect(()=> {
    const taskData = localStorage.getItem('taskData')
    if (taskData === null) {
      return 
    } else {
      setTasks(JSON.parse(taskData))
    }
  }, [])

  return (
    <div className="container h-100 d-flex flex-column justify-content-center gap-3">
      <AddTask tasks={tasks} setTasks={setTasks}></AddTask>
      <Search search={search} setSearch={setSearch}></Search>
      <Filter filter={filter} setFilter={setFilter}></Filter>
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        search={search}
        filter={filter}
      ></TaskList>
    </div>
  );
}

export default App;
