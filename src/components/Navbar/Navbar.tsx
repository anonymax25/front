import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navitem}>
        Front
      </Link>
      <Link to="/about" className={styles.navitem}>
        About
      </Link>
      <div className={styles.spacer} />
      <Link to="/login" className={styles.navitem}>
        Login
      </Link>
      <Link to="/signin" className={styles.navitem}>
        Signin
      </Link>
    </nav>
  )
}

export default Navbar;
