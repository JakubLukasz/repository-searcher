import styles from '../styles/main.module.css';
import PageLink from "../components/PageLink";
import { MdWavingHand } from 'react-icons/md'

const Home = () => {
    return (
        <div className={styles.main__welcome}>
          <MdWavingHand size={60}/>
          <h1 className={styles.main__heading}>Welcome to Repository Searcher</h1>
          <p className={styles.main__text}>Click button bellow to start searching</p>
          <PageLink href="/search">Let's Search!</PageLink>
        </div>
    )
}

export default Home;
