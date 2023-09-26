// useLikeBookmarkHook.js
import { useState } from 'react';

const useLikeBookmarkHook = () => {
  const [likedPosts, setLikedPosts] = useState([]);
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);

  const handleLikeClick = (postId) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter(id => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  const handleBookmarkClick = (postId) => {
    if (bookmarkedPosts.includes(postId)) {
      setBookmarkedPosts(bookmarkedPosts.filter(id => id !== postId));
    } else {
      setBookmarkedPosts([...bookmarkedPosts, postId]);
    }
  };

  return { likedPosts, bookmarkedPosts, handleLikeClick, handleBookmarkClick };
};

export default useLikeBookmarkHook;
