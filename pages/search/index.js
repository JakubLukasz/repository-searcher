import SearchBar from "../../components/SearchBar";
import { useRouter } from "next/router";

const index = () => {
    const router = useRouter();
    const handleSearch = async (phrase) => {
        router.push(`/search/${phrase}`)
    }

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
        </div>
    )
}

export default index
