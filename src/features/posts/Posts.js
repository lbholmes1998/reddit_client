import React, { useState } from 'react';
import { HandThumbUpIcon, ChatBubbleLeftIcon } from '@heroicons/react/20/solid'
import { useSelector, useDispatch } from 'react-redux';

import {
    fetchSubPosts,
    fetchDummy,
    selectPosts,
    selectLoading
} from '../posts/postsSlice'

import styles from '../counter/Counter.module.css';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Posts() {
    // Show popular posts (or potentially others) in a feed-like display

    const posts = useSelector(selectPosts);
    console.log(posts)
    const loading = useSelector(selectLoading)
    const dispatch = useDispatch();

    return (
        <div className="flow-root max-w-xl">
            <button
                className={styles.asyncButton}
                onClick={() => dispatch(fetchSubPosts('popular'))}
            >
                Fetch Reddit Popular Posts
            </button>
            {Object.keys(posts).length > 0 && (
                <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                    {Object.values(posts).map((post) => (
                        <li
                            key={post.id}
                            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
                        >
                            <div className="flex flex-1 flex-col p-8">
                                <img alt="" src={post.thumbnail} className="mx-auto h-32 w-32 flex-shrink-0" />
                                <h3 className="mt-6 text-sm font-medium text-gray-900">{post.title}</h3>
                                <dl className="mt-1 flex flex-grow flex-col justify-between">
                                    <dt className="sr-only">Author</dt>
                                    <dd className="text-sm text-gray-500">Posted by: {post.author}</dd>
                                    {/* <dt className="sr-only">Author</dt>
                                    <dd className="mt-3">
                                        <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                            {post.author}
                                        </span>
                                    </dd> */}
                                </dl>
                            </div>
                            <div>
                                <div className="-mt-px flex divide-x divide-gray-200">
                                    <div className="-ml-px flex w-0 flex-1">
                                        <p
                                            className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                                        >
                                            <HandThumbUpIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                                            {post.upvotes}
                                        </p>
                                    </div>
                                    <div className="flex w-0 flex-1">
                                        <p
                                            className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                                        >
                                            <ChatBubbleLeftIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                                            {post.comments}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

        </div>
    )
}