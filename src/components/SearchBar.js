import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchBar = ({ searchTerm, setSearchTerm, onSearch }) => {
  return (
    <Form inline className="justify-content-center mb-4">
      <FormControl
        type="text"
        placeholder="Search for recipes..."
        className="mr-sm-2"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <Button variant="outline-success" onClick={onSearch}>Search</Button>
    </Form>
  );
};

export default SearchBar;
