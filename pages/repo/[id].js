import dayjs from 'dayjs';
import React from 'react'
import { client } from "../../apollo/client";
import { SHOW_REPO } from '../../apollo/queries';
import styles from '../../styles/repo.module.css';
import { useRouter } from 'next/router';
import PageLink from '../../components/PageLink';
const Index = ({repo}) => {
    
    const router = useRouter();
    const {name,createdAt,description,pushedAt,url,owner} = repo;

    return (
        <div className={styles.repoEl}>
            {console.log(repo)}
            <div className={styles.repoEl__header}>
            <div className={styles.repoEl__avatar}>
                <img src={owner.avatarUrl} alt={owner.login}/> 
            </div>
            <p className={styles.repoEl__title}>{name}</p>
            </div>
            <p className={styles.repoEl__description}>{description}</p>
            <div className={styles.repoEl__info}>
                <p>Owner: {owner.login}</p>
                <p>Updated: {dayjs(pushedAt).format("DD.MM.YYYY")}</p>
                <p>Created: {dayjs(createdAt).format("DD.MM.YYYY")}</p>
            </div>
            <nav className={styles.repoEl__nav}>
                <button className={styles.repoEl__backButton} onClick={() => router.back()}>Go Back</button>
                <PageLink href={url}>Show on Github</PageLink>
            </nav>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    
const { data } = await client.query({
    query:SHOW_REPO,
    variables: { id: context.params.id}
})

return{
    props: {
        repo:data.node
    }
}
}

export default Index;
