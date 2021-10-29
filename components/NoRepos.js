import { RiEmotionSadLine } from 'react-icons/ri';
import styles from '../styles/repo.module.css';
const NoRepos = () => {
    return (
        <div className={styles.repo__noRepo}>
            <RiEmotionSadLine size={100}/>
            <p className={styles.repo__noRepoText}>Currently we havent found any repository</p>
        </div>
    )
}

export default NoRepos
