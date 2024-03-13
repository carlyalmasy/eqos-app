import SearchResults from '../components/search/SearchResults.jsx';
import SearchBox from '../components/search/SearchBox.jsx';

export default function Credentials() {
    return (
        <>
            <SearchBox action="/credentials" />
            <div className='mt-12'>
                <SearchResults />
            </div>
        </>
    )
}
