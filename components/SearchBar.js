import styles from '../styles/searchBar.module.css';
import { BsSearch } from 'react-icons/bs';
import {useState,useEffect} from 'react';

const SearchBar = ({onSearch,phrase}) => {
    const [searchingPhrase,setSearchingPhrase] = useState("");
    const isError = searchingPhrase.length < 3 && searchingPhrase.length !== 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchingPhrase.length >= 3 ) onSearch(searchingPhrase); 
    }

    useEffect(() => {
        if(phrase) setSearchingPhrase(phrase)
    },[phrase])

    return (
        <div className={styles.searchbar}>
        <form className={styles.searchbar__content} onSubmit={handleSubmit}>
            <BsSearch className={styles.searchbar__icon}/>
            <input className={styles.searchbar__input} onChange={(e) => setSearchingPhrase(e.target.value)} value={searchingPhrase} type="text" placeholder="Search"/>
        </form>
        {isError && <p className={styles.searchbar__error}>You must enter at least 3 characters</p>}
        </div>
    )
}

export default SearchBar
