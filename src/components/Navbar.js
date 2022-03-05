import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

//Style
import styles from './Navbar.module.css';

function Navbar() {
  const { logOut, error } = useLogout();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to='/'>myMoney</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/signup'>Sign Up</Link>
        </li>
        <li>
          <button className='btn' onClick={logOut}>
            Log Out
          </button>
          {error && <em>{error}</em>}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
