import styles from '../styles/navBar.module.css';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <div className={styles.navbar__logo}>
                    <FaGithub color="#ffffff" size={40}/>
                    <h1 className={styles.navbar__title}>Github Graphql API</h1>
                </div>
            </Link>
        </nav>
    )
}

export default NavBar
