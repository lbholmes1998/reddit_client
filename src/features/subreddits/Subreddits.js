// Comp to hold list of available subreddits for the user to view. 

import React, { useEffect, useState } from 'react';
import { HandThumbUpIcon, ChatBubbleLeftIcon } from '@heroicons/react/20/solid'
import { useSelector, useDispatch } from 'react-redux';
import {
    Sidebar,
    SidebarBody,
    SidebarDivider,
    SidebarFooter,
    SidebarHeader,
    SidebarHeading,
    SidebarItem,
    SidebarLabel,
    SidebarSection,
    SidebarSpacer,
} from '../../app/components/sidebar'

import {
    getSubs,
    selectSubreddits,
    selectLoading
} from './subredditsSlice'

export default function Subreddits() {
    // Show popular subreddits

    const subreddits = useSelector(selectSubreddits);
    const loading = useSelector(selectLoading)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSubs())
    }, [])

    return (
        <div className="flow-root max-w-xl">
            {Object.values(subreddits).map((subreddit) => (
                <SidebarItem key={subreddit.id}>
                    <img alt="Subreddit icon" src={subreddit.icon} className="mx-auto w-6 h-6"/>
                    <SidebarLabel>{subreddit.url}</SidebarLabel>
                </SidebarItem>
            ))}
        </div>
    )
}