import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Search() {
    return (
        <div className='search-comp'>
            <div className='input-comp'>
                <input className='search-input' type='text' />
            </div>
            <button className='search-icon'>
                <Icon className='icon' icon={faSearch} />
            </button>
        </div>
    )
}

export default Search
