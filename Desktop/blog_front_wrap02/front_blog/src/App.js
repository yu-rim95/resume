import './App.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/main/Main';
import Write from './views/write/Write';
import Locker from './views/locker/Locker';
import PostList from './views/post/postList/PostList';
import PostStash from './views/post/postList/PostStash';
import UserPostList from './views/post/postList/UserPostList';
import PostDetail from './views/post/postDetail/PostDetail';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/write" element={<Write />} />
      <Route path="/locker" element={<Locker />} />
      <Route path="/postlist" element={<PostList />} />
      <Route path="/postlist_user" element={<UserPostList />} />
      <Route path="/postStash" element={<PostStash />} />
      <Route path="/post-detail" element={<PostDetail />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
