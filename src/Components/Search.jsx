import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsSearch } from 'react-icons/bs';

const Search = ({ search, setSearch }) => {
  return (
    <div className="py-3 container-width m-auto">
      <InputGroup>
        <InputGroup.Text>
          <BsSearch />
        </InputGroup.Text>
        <Form.Control
          placeholder="Digite para pesquisar"
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        ></Form.Control>
      </InputGroup>
    </div>
  );
};

export default Search;
