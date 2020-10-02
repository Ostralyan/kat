import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap'
import Add from './Add'
import Edit from './Edit'
import './App.css';

function App() {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  return (
    <div className="App">
      <Button onClick={() => { setAddModal(!addModal) }}>
        Add
      </Button>
      <Button onClick={() => { setEditModal(!editModal) }}>
        Edit
      </Button>
      <Add
        show={addModal}
        showFunc={setAddModal}
      >
      </Add>
      <Edit
        show={editModal}
        showFunc={setEditModal}
      >
      </Edit>
    </div>
  );
}

export default App;
