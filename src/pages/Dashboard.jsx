import React from 'react';

// Contexts
import { AuthContext } from '../context';

// Styles
import styles from '../styles/Dashboard.module.css';

const Dashboard = () => {
  const {
    authData: { user },
  } = React.useContext(AuthContext);

  return (
    <div className={styles.dashboard__container}>
      <h1 className={styles.dashboard__heading}>Evernote Clone</h1>
      {user && <p> Hello, {user.email}</p>}
    </div>
  );
};

export default Dashboard;
