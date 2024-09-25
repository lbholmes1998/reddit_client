import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchSubPosts,
  selectPosts,
  selectLoading
} from '../posts/postsSlice'

import Posts from '../posts/Posts';
import styles from './Counter.module.css';

export function Counter() {
  const popularPosts = useSelector(selectPosts);
  console.log(popularPosts)
  const loading = useSelector(selectLoading)
  const dispatch = useDispatch();


  return (
    <div>
      <div className={styles.row}>
        <div>
          <Posts posts={popularPosts}/>
          {loading && (
            <p>LOADING</p>
          )}
        </div>
      </div>
      <div className={styles.row}>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(fetchSubPosts('popular'))}
        >
          Fetch Reddit Popular Posts
        </button>
      </div>
    </div>
  );
}
