import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";

function EditCategories({
  categoriesModalShow,
  setCategoriesModalShow,
  categories,
  setCategories,
}) {
  const [category, setCategory] = React.useState("");

  function handleClose() {
    setCategoriesModalShow(false);
  }

  function addCategory() {
    if (category.trim() !== "") {
      const newCategories = [...categories, category];
      setCategories(newCategories);
      setCategory("");
      window.localStorage.setItem("categories", JSON.stringify(newCategories));
    }
  }

  function removeCategory(category) {
    const filteredCategories = categories.filter((c) => c != category);
    setCategories(filteredCategories);
    window.localStorage.setItem(
      "categories",
      JSON.stringify(filteredCategories)
    );
  }

  return (
    <Modal
      show={categoriesModalShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Editar categorias
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          {categories.map((category) => (
            <ListGroup.Item
              key={category}
              className="d-flex justify-content-between align-items-center fs-5 fw-bold"
            >
              {category}
              <Button
                className="btn-danger"
                onClick={() => removeCategory(category)}
              >
                Remover
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex gap-3">
          <Form.Control
            id="category"
            value={category}
            onChange={({ target }) => {
              setCategory(target.value);
            }}
          ></Form.Control>
          <Button onClick={addCategory}>Adicionar</Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default EditCategories;
