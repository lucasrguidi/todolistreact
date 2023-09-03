import React from 'react';
import Form from 'react-bootstrap/Form';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="container-width m-auto">
      <Form className="w-50 m-auto m-lg-0">
        <Form.Group>
          <Form.Select
            value={filter}
            onChange={({ target }) => setFilter(target.value)}
          >
            <option>Todos</option>
            <option>Estudos</option>
            <option>Pessoal</option>
            <option>Trabalho</option>
          </Form.Select>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Filter;
