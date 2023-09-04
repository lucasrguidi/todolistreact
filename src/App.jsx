import "./App.css";
import AddTask from "./Components/AddTask";
import EditTask from "./Components/EditTask";
import Filter from "./Components/Filter";
import Search from "./Components/Search";
import TaskList from "./Components/TaskList";
import React from "react";

function App() {
  const [tasks, setTasks] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [filter, setFilter] = React.useState("Todos");

  const [modalShow, setModalShow] = React.useState(false);
  const [editingTask, setEditingTask] = React.useState(null);

  React.useEffect(() => {
    const taskData = localStorage.getItem("taskData");
    if (taskData === null) {
      return;
    } else {
      setTasks(JSON.parse(taskData));
    }
  }, []);

  function editTask(id) {
    const selectedTask = tasks.find((task) => task.id === id);
    setEditingTask(selectedTask);
  }

  React.useEffect(() => {
    if (editingTask != null) {
      setModalShow(true);
    }
  }, [editingTask]);

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
        editTask={editTask}
      ></TaskList>
      {editingTask ? (
        <EditTask
          show={modalShow}
          onHide={() => setModalShow(false)}
          editingTask={editingTask}
          setEditingTask={setEditingTask}
          tasks={tasks}
          setTasks={setTasks}
          modalShow={modalShow}
          setModalShow={setModalShow}
        />
      ) : null}
    </div>
  );
}

export default App;
