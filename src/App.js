import Searchbar from './components/SearchBar/SearchBar'
import Filters from './components/Filter/Filters'
import News from './components/NewsCards/News'
import {GlobalProvider} from './GlobalState/GlobalState'

function App() {
  return (
    <>
      <GlobalProvider>
          <Searchbar />
          <Filters />
          <News />
      </GlobalProvider>
    </>
  );
}

export default App;
