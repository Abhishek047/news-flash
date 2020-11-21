import {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'


const initialState = {
    //FILTERS
    filters : [
        {
            name: 'general',
            value: true,
        },
        {
            name: 'business',
            value: false,
        },
        {
            name: 'entertainment',
            value: false,
        },
        {
            name: 'sports',
            value: false,
        },
        {
            name: 'science',
            value: false,
        },
        {
            name: 'technology',
            value: false,
        },
        {
            name: 'health',
            value: false,
        },
    ],
}

export const GlobalContext = createContext(initialState);

// ACTIONS
export const GlobalProvider = ({children}) => {
    //ADDING FIILTR
    function addFilter(name, value){
        // WE HAVE TO DIPATCH THING HERE
        const alteredFilter={
            name,
            value
        }
        disptach({
            type:'ADD_FILTER',
            payload: alteredFilter
        });;
    }

    // REMOVE FILTER
    function removeFilter(name,value){
        // WE HAVE TO DIPATCH THING HERE
        const alteredFilter={
            name,
            value
        }
        disptach({
            type:'REMOVE_FILTER',
            payload: alteredFilter
        });;
    }
    
    // BINDING TO REDUCER
    const [state, disptach] = useReducer(AppReducer, initialState);

    return(
        <GlobalContext.Provider value={{
            filters: state.filters,
            addFilter,
            removeFilter,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

