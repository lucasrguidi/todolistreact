import "./App.css";
import AddTask from "./Components/AddTask";
import EditCategories from "./Components/EditCategories";
import EditTask from "./Components/EditTask";
import Filter from "./Components/Filter";
import Search from "./Components/Search";
import TaskList from "./Components/TaskList";
import React from "react";

function App() {
  const [tasks, setTasks] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [filter, setFilter] = React.useState("Todos");
  const [categories, setCategories] = React.useState([
    "Estudos",
    "Pessoal",
    "Trabalho",
  ]);

  const [editModalShow, setEditModalShow] = React.useState(false);
  const [editingTask, setEditingTask] = React.useState(null);
  const [categoriesModalShow, setCategoriesModalShow] = React.useState(false);

  React.useEffect(() => {
    const taskData = localStorage.getItem("taskData");
    if (taskData === null) {
      return;
    } else {
      setTasks(JSON.parse(taskData));
    }
  }, []);

  React.useEffect(() => {
    const categoriesData = localStorage.getItem("categories");
    if (categoriesData === null) {
      return;
    } else {
      setCategories(JSON.parse(categoriesData));
    }
  }, []);

  function editTask(id) {
    const selectedTask = tasks.find((task) => task.id === id);
    setEditingTask(selectedTask);
  }

  React.useEffect(() => {
    if (editingTask != null) {
      setEditModalShow(true);
    }
  }, [editingTask]);

  return (
    <div className="container h-100 d-flex flex-column justify-content-center gap-3">
      <AddTask
        tasks={tasks}
        setTasks={setTasks}
        categories={categories}
        setCategories={setCategories}
        categoriesModalShow={categoriesModalShow}
        setCategoriesModalShow={setCategoriesModalShow}
      ></AddTask>
      <Search search={search} setSearch={setSearch}></Search>
      <Filter
        filter={filter}
        setFilter={setFilter}
        categories={categories}
        setCategories={setCategories}
      ></Filter>
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        search={search}
        filter={filter}
        editTask={editTask}
      ></TaskList>
      {editingTask ? (
        <EditTask
          show={editModalShow}
          onHide={() => setEditModalShow(false)}
          editingTask={editingTask}
          setEditingTask={setEditingTask}
          tasks={tasks}
          setTasks={setTasks}
          editModalShow={editModalShow}
          setEditModalShow={setEditModalShow}
          categories={categories}
        />
      ) : null}
      {categoriesModalShow && (
        <EditCategories
          categoriesModalShow={categoriesModalShow}
          setCategoriesModalShow={setCategoriesModalShow}
          categories={categories}
          setCategories={setCategories}
        />
      )}
    </div>
  );
}

export default App;
