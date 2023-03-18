import React, { useState } from 'react';


function AddMovie({ onAdd }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('Comedies');
 

  const changeName = (e) => setName(e.target.value);
  const changeDescription = (e) => setDescription(e.target.value);
  const changeType = (e) => setType(e.target.value);

 

  const onSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 100) + 1;
    onAdd({ id, name, description, type });
    setName('');
    setDescription('');
    setType('Comedies');
  };

  
  

  const validForm = name && description && type;

 


  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Add Movie</h5>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" value={name} onChange={changeName} required />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea className="form-control" id="description" value={description} onChange={changeDescription} required></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="type" className="form-label">
              Type
            </label>
            <select className="form-select" id="type" value={type} onChange={changeType} required>
              <option value="Comedies">Comedies</option>
              <option value="Family Movies">Family Movies</option>
              <option value="Action">Action</option>
              <option value="Drama">Drama</option>
              <option value="Science Fiction">Science Fiction</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary" disabled={!validForm}>
            Add Movie
          </button>
          
        </form>
      </div>
    </div>
  );
}

export default AddMovie;
