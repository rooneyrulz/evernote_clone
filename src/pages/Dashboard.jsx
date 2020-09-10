import React from 'react';
import AuthContext from '../context/AuthContext';

const Dashboard = (props) => {
  const { isAuthenticated } = React.useContext(AuthContext);

  !isAuthenticated && props.history.push('/sign-in');

  return (
    <div className='dashboard'>
      <h2>Dashboard</h2>
      <p>{}</p>
    </div>
  );
};

export default Dashboard;
