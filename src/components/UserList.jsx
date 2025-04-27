import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../features/users/usersSlice';
import ClipLoader from 'react-spinners/ClipLoader';

const UserList = () => {
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();
  const [deletingUserId, setDeletingUserId] = useState(null);

  const handleDelete = (id) => {
    setDeletingUserId(id);

    setTimeout(() => {
      dispatch(deleteUser(id));
      setDeletingUserId(null);
    }, 1000); // Simulate small delay
  };

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}
          <button onClick={() => handleDelete(user.id)}>
            {deletingUserId === user.id ? (
              <ClipLoader size={16} color="#d9534f" />
            ) : (
              'Delete'
            )}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
