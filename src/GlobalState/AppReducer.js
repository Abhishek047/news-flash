const App = (state, action) => {
    switch(action.type){
        case 'ADD_FILTER':
        console.log('REDUCER_ADD', action.payload);            
        return{
                ...state,
                filters: [action.payload, ...state.filters.filter(eachFilter => eachFilter.name !== action.payload.name)]
            }
        case 'REMOVE_FILTER':
        console.log('REDUCER_REMOVE', action.payload);    
        return {
            ...state,
            filters: [...state.filters.filter(eachFilter => eachFilter.name !== action.payload.name), action.payload]
        }
        case 'GET_NEWS':
        console.log('GET_REDUCER', action.payload);
        return {
            ...state,
            news: action.payload
        }
        case 'LOADED':
        console.log('LOADED_REDUCER');
        return {
            ...state,
            loadingNews: false
        }
        case 'LOADING':
        console.log('LOADING_REDUCER');
        return {
            ...state,
            news: [],
            loadingNews: true
        }
        default:
            return state
    }
}

export default App