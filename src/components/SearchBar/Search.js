import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {useContext, useState} from 'react'
import {GlobalContext} from '../../GlobalState/GlobalState'

function Search() {
    const {searchNews} = useContext(GlobalContext);
    const [search, setSearch] = useState('');
    function handleSearch(){
        if(search.length !== 0)
        {
            let keywords = search.split(' ');
            keywords = keywords.join('+');
            searchNews(`${keywords}+${search}`);
            setSearch('');
        }
    }
    return (
        <div className='search-comp'>
            <div className='input-comp'>
                <input className='search-input' value={search} type='text' onChange={(e)=>setSearch(e.target.value)} />
            </div>
            <button className='search-icon' onClick={handleSearch}>
                <Icon className='icon' icon={faSearch} />
            </button>
        </div>
    )
}

export default Search
