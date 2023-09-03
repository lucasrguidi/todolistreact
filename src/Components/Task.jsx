import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsTrash } from "react-icons/bs";

const Task = ({ task, deleteTask, completeTask }) => {
  return (
    <Card
      key={task.id}
      className="m-auto container-width"
      style={
        task.completed
          ? { textDecoration: "line-through" }
          : { textDecoration: "" }
      }
    >
      <Card.Header className="d-flex align-items-center justify-content-between">
        <Card.Title>{task.title}</Card.Title>
        <div
          className="w-25 rounded-pill"
          style={{ backgroundColor: task.color, height: "1em" }}
        ></div>
      </Card.Header>
      <Card.Body>
        <Card.Text>{task.description}</Card.Text>
        <Card.Subtitle className="text-muted">{task.category}</Card.Subtitle>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <Button
          className="btn btn-success w-sm-25 w-auto "
          onClick={() => completeTask(task.id)}
        >
          {task.completed ? "Completa" : "Completar"}
        </Button>
        <Button className="btn btn-danger" onClick={() => deleteTask(task.id)}>
          <BsTrash />
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Task;
