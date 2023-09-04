import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddTask from "./AddTask";

function EditTask({
  editingTask,
  onHide,
  setEditingTask,
  show,
  tasks,
  setTasks,
  setEditModalShow,
  categories,
}) {
  function cancelEdit() {
    setEditModalShow(false);
    setEditingTask(null);
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Editar tarefa
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddTask
          editData={editingTask}
          tasks={tasks}
          setTasks={setTasks}
          setEditModalShow={setEditModalShow}
          categories={categories}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={cancelEdit}>Cancelar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditTask;
