import {useContext, useEffect} from 'react'
import { GlobalContext } from '../../GlobalState/GlobalState';
import FilterItem from './FilterItem'

function Filters() {

    const {filters, addFilter, removeFilter} = useContext(GlobalContext);
   
    // FUNCTION HANDLES CHANGES
    function handleChange(name, value){
        if(value === true)
            removeFilter(name, !value)
        else    
            addFilter(name, !value);
    }

    useEffect(()=>{
        if(!filters.some(filter => filter.value === true))
            console.log('EMPTY');
    },[filters])

    return (
        <div className='container'>
            <div  className='filters'>
                {
                    filters.map((filter) =>
                        <FilterItem key={filter.name} name={filter.name} value={filter.value} handleChange={handleChange}/> 
                    )
                }        
            </div>
        </div>
    )
}

export default Filters
