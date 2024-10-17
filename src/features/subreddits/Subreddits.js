// Comp to hold list of available subreddits for the user to view. 

import React, { useEffect, useState } from 'react';
import { HandThumbUpIcon, ChatBubbleLeftIcon } from '@heroicons/react/20/solid'
import { useSelector, useDispatch } from 'react-redux';
import {
    SidebarItem,
    SidebarLabel,
} from '../../app/components/sidebar'

import {
    getSubs,
    selectSubreddits,
    selectLoading,
    addSelectedSub
} from './subredditsSlice'

export default function Subreddits() {

    // Show popular subreddits
    const subreddits = useSelector(selectSubreddits);
    const loading = useSelector(selectLoading)
    const dispatch = useDispatch();

    const handleSubSelect = (e) => {
        let selected = e.target.innerText.replace('/r/', '').trim();
        console.log(selected)
        dispatch(addSelectedSub(selected))
    }

    useEffect(() => {
        dispatch(getSubs())
    }, [])

    return (
        <div className="flow-root max-w-xl">
            {Object.values(subreddits).map((subreddit) => (
                <SidebarItem key={subreddit.id}>
                    <img alt="Subreddit icon" src={subreddit.icon} className="mx-auto w-6 h-6"/>
                    <SidebarLabel value={subreddit.url} onClick={(e) => handleSubSelect(e)}>
                        {subreddit.url}
                    </SidebarLabel>
                </SidebarItem>
            ))}
        </div>
    )
}