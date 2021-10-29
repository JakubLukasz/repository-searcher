import Link from 'next/link';
import { BsGithub} from 'react-icons/bs';
import styles from '../styles/repo.module.css';
import dayjs from 'dayjs';

const RepoItem = ({description,id,nameWithOwner,createdAt}) => {
    return (
        <div className={styles.repo}>
            <div className={styles.repo__content}>
                <header className={styles.repo__header}>
                    <BsGithub size={30}/>
                    <p className={styles.repo__name}>{nameWithOwner}</p>
                </header>
                <p className={styles.repo__description}>{description}</p>
            </div>
            <div className={styles.repo__controls}>
                <p>{dayjs(createdAt).format('DD.MM.YYYY')}</p>
                <div className={styles.repo__link}>
                    <Link href={`/repo/${id}`}>More info</Link>
                </div>
            </div>
        </div>
    )
}

export default RepoItem;
