import React from 'react';
import { Link } from 'react-router-dom';

// Contexts
import { AuthContext } from '../../context';
import { loginUser } from '../../actions/auth';

// Styles
import styles from '../../styles/Auth.module.css';

const Login = (props) => {
  const {
    authData: { isAuthenticated },
    dispatch,
  } = React.useContext(AuthContext);
  const [formData, setFormData] = React.useState({ email: '', password: '' });

  if (isAuthenticated) props.history.push('/');

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const onLogin = async (e) => {
    e.preventDefault();
    loginUser(formData, dispatch, props.history);
  };

  return (
    <div className={styles.auth__container}>
      <h1 className={styles.auth__heading}>Sign In</h1>
      <form onSubmit={(e) => onLogin(e)} className={styles.auth__form}>
        <input
          id='email'
          type='email'
          placeholder='Email'
          onChange={(e) => onChange(e)}
          className={styles.input__email}
          required
        />
        <br />
        <input
          id='password'
          type='password'
          placeholder='Password'
          onChange={(e) => onChange(e)}
          className={styles.input__password}
          required
        />
        <br />
        <button type='submit' className={styles.btn__auth}>
          Sign In
        </button>
      </form>
      <p className={styles.auth__help__text}>
        If you did not already have an account, <br /> Let's create one{' '}
        <Link to='/sign-up' className={styles.auth__help__text__link}>
          here
        </Link>
      </p>
    </div>
  );
};

export default Login;
