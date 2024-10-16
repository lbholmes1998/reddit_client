import React from 'react';
import './App.css';
import AppLayout from './AppLayout';
import {
  Route,
  BrowserRouter,
  Routes,
  Navigate
} from "react-router-dom";
import { Post } from '../features/posts/Post';
import Posts from '../features/posts/Posts';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />} />
          <Route path="posts/:postId" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
