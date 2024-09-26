// Comp to hold list of available subreddits for the user to view. 

import React, { useState } from 'react';
import { HandThumbUpIcon, ChatBubbleLeftIcon } from '@heroicons/react/20/solid'
import { useSelector, useDispatch } from 'react-redux';

import {
    getSubs,
    selectSubreddits,
    selectLoading
} from './subredditsSlice'

import styles from '../counter/Counter.module.css';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Subreddits() {
    // Show popular subreddits

    const subreddits = useSelector(selectSubreddits);
    console.log(subreddits)
    const loading = useSelector(selectLoading)
    const dispatch = useDispatch();

    return (
        <div className="flow-root max-w-xl">
            <button
                className={styles.asyncButton}
                onClick={() => dispatch(getSubs())}
            >
                Fetch most popular subreddits
            </button>
            {Object.keys(subreddits).length > 0 && (
                <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                    {Object.values(subreddits).map((subreddit) => (
                        <li
                            key={subreddit.id}
                            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
                        >
                            <p>{subreddit.title}</p>
                        </li>
                    ))}
                </ul>
            )}

        </div>
    )
}