import React from 'react';
import firebase from '../config/firebase.config';

const Dashboard = (props) => {
  const [userData, setUserData] = React.useState(null);

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setUserData(null);
        props.history.push('/sign-in');
      } else {
        setUserData(user.email);
      }
    });
  }, []);

  return (
    <div className='dashboard'>
      <h2>Dashboard</h2>
      <p>{userData}</p>
    </div>
  );
};

export default Dashboard;
