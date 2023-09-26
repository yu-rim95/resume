import './BestBlog.scss'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDummyPosts } from '../../../apis/dummyApi';
import useLikeBookmarkHook from '../../../hooks/useLikeBookmarkHook'

function BestBlog() {
    const { likedPosts, bookmarkedPosts, handleLikeClick, handleBookmarkClick } = useLikeBookmarkHook();
    const [dummyData, setDummyData] = useState([]);
    const maxPostsToShow = 4;

    useEffect(() => {
        getDummyPosts().then(data => {
            setDummyData(data);
        });
        }, []);
        
    const filteredData = dummyData.slice(0, maxPostsToShow);      
  return (
        <>
            <section className='card_wrap_best'>
                <div className='inner'>
                    <div className='b_wrap'>
                    <h1>인기 블로그 글</h1>
                        <div className="container">
                            {filteredData.map((post) => (
                                <div className="card_d" key={post.id}>
                                     <Link to='/post-detail' target='_blank'  >
                                            {post.thumbnail ? (
                                                <div className='card_img'><img src={post.thumbnail} alt="썸네일" /></div>
                                            ) : null}
                                            <div className={post.thumbnail ? 'card_t_th' : 'card_t_tn'}>
                                                <h2>{post.title}</h2>
                                                <p>{post.content}</p>
                                            </div>
                                    </Link>
                                    <div className='card_i'>
                                        <div className='card_u'>by<span>{post.user_id}</span></div>
                                        <button className={`like-icon ${likedPosts.includes(post.id) ? 'on' : ''}`}
                                            onClick={() => handleLikeClick(post.id)}></button>
                                        <button className={`bookmark-icon ${bookmarkedPosts.includes(post.id) ? 'on' : ''}`}
                                            onClick={() => handleBookmarkClick(post.id)}></button>
                                    </div>
                                </div>
                            ))}     
                        </div>
                    </div>
                </div>
            </section>
        </>
  )
}

export default BestBlog
