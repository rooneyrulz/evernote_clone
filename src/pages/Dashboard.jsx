import React from 'react';
import AuthContext from '../context/AuthContext';

// Styles
import styles from '../styles/Dashboard.module.css';

const Dashboard = () => {
  const {
    authData: { user },
  } = React.useContext(AuthContext);

  return (
    <div className={styles.dashboard__container}>
      <h2>Dashboard</h2>
      {user && <p>{user.email}</p>}
    </div>
  );
};

export default Dashboard;
