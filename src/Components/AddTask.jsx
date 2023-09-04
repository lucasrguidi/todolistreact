import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddTask = ({ tasks, setTasks, editData, setModalShow, modalShow }) => {
  const [editing, setEditing] = React.useState(false);
  const [title, setTitle] = React.useState(editData?.title ?? "");
  const [description, setDescription] = React.useState(
    editData?.description ?? ""
  );
  const [category, setCategory] = React.useState(editData?.category ?? "");
  const [color, setColor] = React.useState(editData?.color ?? "#0d6efd");
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    if (editData) {
      setEditing(true);
    }
  }, [editData]);

  function saveTask(event) {
    event.preventDefault();

    if (title.trim() != "" && category != "") {
      setError(false);
      const id = generateId();

      const newTask = { id, title, description, category, color };
      const newTasks = [...tasks, newTask];
      setTasks(newTasks);

      localStorage.setItem("taskData", JSON.stringify(newTasks));

      setTitle("");
      setDescription("");
      setCategory("");
    } else {
      setError(true);
    }
  }

  function updateTask(event, editData) {
    event.preventDefault();

    if (title.trim() != "" && category != "") {
      setError(false);
      const id = editData.id;

      const updatedTask = { id, title, description, category, color };

      const currentTaskIndex = tasks.findIndex(
        (task) => task.id === editData.id
      );
      tasks[currentTaskIndex] = updatedTask;
      const newTasks = [...tasks];
      setTasks(newTasks);

      localStorage.setItem("taskData", JSON.stringify(newTasks));

      setModalShow(false);
      setEditing(false);
    } else {
      setError(true);
    }
  }

  function generateId() {
    return (Math.random() * 100).toFixed();
  }

  return (
    <div className="d-flex flex-column gap-3 align-items-center py-3">
      {!editing && <h1 className="text-center">Adicionar tarefa</h1>}
      <Form className="d-flex flex-column gap-3 container-width">
        <Form.Group>
          <Form.Label htmlFor="title">Título</Form.Label>
          <Form.Control
            id="title"
            value={title}
            onChange={({ target }) => {
              setTitle(target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="description">Descrição</Form.Label>
          <Form.Control
            id="description"
            as="textarea"
            rows={3}
            value={description}
            onChange={({ target }) => setDescription(target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="d-flex align-items-center justify-content-between gap-3">
          <div className="container-width">
            <Form.Label htmlFor="category">Categoria</Form.Label>
            <Form.Select
              id="category"
              value={category}
              onChange={({ target }) => setCategory(target.value)}
            >
              <option disabled value="">
                Selecione
              </option>
              <option>Estudos</option>
              <option>Pessoal</option>
              <option>Trabalho</option>
            </Form.Select>
          </div>
          <div className="container-width d-flex align-items-center flex-column">
            <Form.Label htmlFor="color">Cor</Form.Label>
            <Form.Control
              id="color"
              type="color"
              title="Escolha a cor"
              value={color}
              onChange={({ target }) => setColor(target.value)}
            ></Form.Control>
          </div>
        </Form.Group>
        {error && (
          <div className="alert alert-danger" role="alert">
            Os campos Título e Categoria são obrigatórios
          </div>
        )}

        <Button
          onClick={
            editing ? () => updateTask(event, editData) : () => saveTask(event)
          }
          className="btn-primary w-25 m-auto m-lg-0"
        >
          {editing ? "Atualizar" : "Adicionar"}
        </Button>
      </Form>
    </div>
  );
};

export default AddTask;
