import './App.css';
import React, { useState, useEffect } from 'react'; // <-- you forgot useState and useEffect
import UserForm from './components/userForm';
import UserList from './components/UserList';
import FetchUsers from './components/FetchUsers';
import ClipLoader from 'react-spinners/ClipLoader'; // Spinner

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a small loading time (like 1.5 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (loading) {
    return (
          <div className="loading-screen">
            <div className="spinner-box">
              <ClipLoader size={80} color="#0077ff" />
              <p className="loading-text">Loading your dashboard...</p>
            </div>
          </div>
        );
      }


  return (
    <div className="app-container">
      <h1 className='title'>User Management</h1>
      <UserForm />
      <h2>Fetched Users</h2>
      <FetchUsers />
      <h2>Manually Added Users</h2>
      <UserList />
    </div>
  );
}

export default App;
