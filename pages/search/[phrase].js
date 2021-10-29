
import SearchBar from "../../components/SearchBar";
import {useRouter} from "next/router";
import { useQuery } from "@apollo/client";
import { SEARCH_REPOS } from "../../apollo/queries";
import RepoItem from '../../components/RepoItem';
import styles from '../../styles/repo.module.css';
import { Waypoint } from 'react-waypoint';
import NoRepos from "../../components/NoRepos";

const Phrase = () => {
    const router = useRouter();
    const {phrase} = router.query;
    
    const { data,fetchMore } = useQuery(SEARCH_REPOS, {
        variables: { after:null, search:phrase}
    })

    const handleSearch = async (phrase) => {
        router.push(`/search/${phrase}`);
    }

    const onScroll = async () => {
        const { endCursor } = data.search.pageInfo;
        fetchMore({
            variables: { after: endCursor},
            updateQuery: (prev, { fetchMoreResult}) => {
                if(!fetchMoreResult){
                    return prev
                }
                fetchMoreResult.search.nodes = [
                    ...prev.search.nodes,
                    ...fetchMoreResult.search.nodes
                ]
            return fetchMoreResult;
            }
        })
    }
  
    return (
        <div>
            <SearchBar phrase={phrase} onSearch={handleSearch}/>
            {data && <div>
                <div className={styles.repo__container}>
                    {data.search.nodes.map(repo => <RepoItem key={repo.id} {...repo}/>)} 
                    <Waypoint onEnter={() => onScroll()}/>
                </div>
                {data.search.nodes.length <= 0 && <NoRepos />}
            </div>}
        </div>
    )
}

export default Phrase;
