import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/users/usersSlice';
import ClipLoader from 'react-spinners/ClipLoader';

const UserForm = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [adding, setAdding] = useState(false);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (name.trim()) {
      setAdding(true);

      setTimeout(() => {
        dispatch(addUser({ name }));
        setAdding(false);
        setName('');
        setError('');
      }, 1000); // Simulate small delay
    } else {
      setError('Please enter a valid name.');
    }
  };

  return (
    <div className="user-form">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
      />
      <button onClick={handleAdd} disabled={!name.trim() || adding}>
        {adding ? <ClipLoader size={20} color="white" /> : 'Add User'}
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default UserForm;
