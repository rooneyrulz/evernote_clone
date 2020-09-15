import React from 'react';
import AuthContext from '../context/AuthContext';

// Styles
import { dashboardStyles } from '../styles/dashboard.module';

const Dashboard = () => {
  const {
    authData: { user },
  } = React.useContext(AuthContext);

  return (
    <div className='dashboard' style={dashboardStyles.dashboardContainer}>
      <h2>Dashboard</h2>
      {user && <p>{user}</p>}
    </div>
  );
};

export default Dashboard;
