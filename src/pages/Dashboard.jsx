import React from 'react';
import AuthContext from '../context/AuthContext';

const Dashboard = () => {
  const {
    authData: { user },
  } = React.useContext(AuthContext);

  return (
    <div className='dashboard'>
      <h2>Dashboard</h2>
      {user && <p>{user}</p>}
    </div>
  );
};

export default Dashboard;
