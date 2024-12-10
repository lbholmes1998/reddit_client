import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedSub } from '../../features/subreddits/subredditsSlice';

export default function SearchBar() {

    const [search, setSearch] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setSelectedSub(search))
        setSearch('')
    }

    return (
        <form className='flex justify-center md:justify-between' 
        onSubmit={handleSubmit}>
            <input
                className="bg-white p-2 w-[220px] sm:w-80 text-xl rounded-xl text-black m-auto"
                type="text"
                placeholder="Search subreddits"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    );
}
