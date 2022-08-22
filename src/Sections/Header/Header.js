import React from 'react'
import styles from './Header.module.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className={`${styles.HeaderNavigation} ${styles.textColor}`}>
                <Link to={'*'} className={`${styles.link} ${styles.ApplyFlexToLinks}`}>About</Link>
                <Link to={'*'} className={`${styles.link} ${styles.ApplyFlexToLinks}`}>Contacts</Link>
                <Link to={'*'} className={`${styles.link} ${styles.ApplyFlexToLinks}`}>Events</Link>
                <Link to={'*'} className={`${styles.link} ${styles.ApplyFlexToLinks}`}>Stories</Link>
                <Link to={'/LogIn'} className={`${styles.link} ${styles.ApplyFlexToLinks}`}>Log In</Link>
                <Link to={'/SignUp'} className={`${styles.link} ${styles.EncouragedLink} ${styles.ApplyFlexToLinks}`}>Sign up</Link>
            </nav>
        </header>
    )

};

export default Header;