import React from 'react';
import AuthContext from '../context/AuthContext';

const Dashboard = (props) => {
  const {
    authData: { isAuthenticated, user },
  } = React.useContext(AuthContext);

  if (!isAuthenticated) props.history.push('/sign-in');

  return (
    <div className='dashboard'>
      <h2>Dashboard</h2>
      {user && <p>{user}</p>}
    </div>
  );
};

export default Dashboard;
