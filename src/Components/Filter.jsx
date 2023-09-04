import React from "react";
import Form from "react-bootstrap/Form";

const Filter = ({ filter, setFilter, categories }) => {
  return (
    <div className="container-width m-auto">
      <Form className="w-50 m-auto m-lg-0">
        <Form.Group>
          <Form.Select
            value={filter}
            onChange={({ target }) => setFilter(target.value)}
          >
            <option>Todos</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Filter;
