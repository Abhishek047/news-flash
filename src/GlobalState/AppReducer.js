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
        default:
            return state
    }
}

export default App