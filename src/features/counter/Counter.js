import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';


import {
  fetchPopular,
  fetchDummy,
  selectPopularPosts,
  selectLoading
} from '../popular/popularSlice'

import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const popularPosts = useSelector(selectPopularPosts);
  console.log(popularPosts)
  const loading = useSelector(selectLoading)
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <div>
          {loading && (
            <p>LOADING</p>
          )}
          {Object.keys(popularPosts).length > 0 && (
            <ul>
              {Object.values(popularPosts).map((post) => (
                <li>{post.title}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className={styles.row}>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(fetchDummy())}
        >
          fetch dummy data
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(fetchPopular())}
        >
          Fetch Reddit Popular Posts
        </button>
      </div>
    </div>
  );
}
