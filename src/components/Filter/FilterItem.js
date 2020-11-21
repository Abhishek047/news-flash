import React from 'react'

function FilterItem({name, value, handleChange}) {

    return (
        <div>
            <button onClick={() => handleChange(name, value)} className={value === true ? 'filter-item active' : 'filter-item in-active'}>
                {name}
                {/* IF ACTIVE THEN TO REMOVE IT*/}
                {
                    value && <span className='remove'>x</span>
                }
            </button>
        </div>
    )
}

export default FilterItem
