import React, { useState } from 'react';

function Movie({ movie, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(movie.name);
  const [description, setDescription] = useState(movie.description);
  const [type, setType] = useState(movie.type);

  const deleteClick = () => onDelete(movie.id);

  const editClick = () => setIsEditing(true);

  const saveClick = () => {
    onEdit(movie.id, name, description, type);
    setIsEditing(false);
  };

  const cancelClick = () => {
    setName(movie.name);
    setDescription(movie.description);
    setType(movie.type);
    setIsEditing(false);
  };

  return (
   
    <div className="card mb-4">
      
        {!isEditing ? (
          <>
          <div className="card-body text-bg-light">
            <div className='d-flex flex-row gap-3'>
            <h5 className="card-title">{movie.name}</h5>
            <span>|</span>
            <p className="card-text">
              <small>{movie.type}</small>
            </p>
            </div>
            <p className="card-text">{movie.description}</p>
            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-outline-success me-2" onClick={editClick}>
                Edit
              </button>
              <button type="button" className="btn btn-danger " onClick={deleteClick}>
                Delete
              </button>
              
            </div>
            </div>
          </>
        ) : (
          <>
            <div className="card-body border-info">
            <input type="text" className="form-control mb-2" value={name} onChange={(e) => setName(e.target.value)} />
            <textarea className="form-control mb-2" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            <select className="form-select mb-2" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="Comedies">Comedies</option>
              <option value="Family Movies">Family Movies</option>
              <option value="Action">Action</option>
              <option value="Drama">Drama</option>
              <option value="Science Fiction">Science Fiction</option>
            </select>
            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-success me-2" onClick={saveClick}>
                Save
              </button>
              <button type="button" className="btn btn-secondary" onClick={cancelClick}>
                Cancel
              </button>
              
            </div>
            </div>
          </>
        )}
      
    </div>
  );
}

export default Movie;
