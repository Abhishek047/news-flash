import Search from './Search'

function SearchBar() {
    return (
        <div className='search-bar'>
            <div className='title'>News<span>Flash</span></div>
            
            {/* SEARCH COMPONENT */}
            <Search />
        </div>
    )
}

export default SearchBar
