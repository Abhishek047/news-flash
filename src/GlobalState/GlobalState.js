import {createContext, useReducer} from 'react'
import axios from 'axios'
import AppReducer from './AppReducer'


const initialState = {
    //FILTERS
    news:[],
    loadingNews: true,
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

const API_URL = 'http://api.mediastack.com/v1/news';
const API_KEY = '7af921ec33526b42e10f7946b64e9a07';
const LANG = 'en';

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
// SET EMPTY
    function noParams(){
        disptach({
            type:'LOADING',
        });
    }

// NEWS ACTION
    async function getNews(catagory){
        try {
            disptach({
                type:'LOADING',
            });
            const response  = await axios.get(`${API_URL}?access_key=${API_KEY}& categories=${catagory}&languages=${LANG}`);
            disptach({
                type:'GET_NEWS',
                payload: response.data.data
            });
            disptach({
                type:'LOADED',
            });
        } catch (err) {
            console.log(err);
        }
    }

// SEARCH NEWS
    async function searchNews(keyword){
        // REMOVE AFTER API FIX
        try {
            disptach({
                type:'LOADING',
            });
            const response  = await axios.get(`${API_URL}?access_key=${API_KEY}&keywords=${keyword}&languages=${LANG}`);
            if(response.data.data.length !== 0)
            {
                disptach({
                    type:'GET_NEWS',
                    payload: response.data.data
                }); 
                disptach({
                    type:'LOADED',
                });
            }
        } catch (err) {
            console.log(err.data);
        }
    }

// BINDING TO REDUCER
    const [state, disptach] = useReducer(AppReducer, initialState);

    return(
        <GlobalContext.Provider value={{
            filters: state.filters,
            news: state.news,
            loadingNews: state.loadingNews,
            addFilter,
            removeFilter,
            getNews,
            noParams,
            searchNews,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

