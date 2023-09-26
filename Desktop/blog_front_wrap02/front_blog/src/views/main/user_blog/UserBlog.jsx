import '../all_blog/AllBlog.scss'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getDummyPosts } from '../../../apis/dummyApi'
import useLikeBookmarkHook from '../../../hooks/useLikeBookmarkHook'

function UserBlog() {
  const { likedPosts, bookmarkedPosts, handleLikeClick, handleBookmarkClick } = useLikeBookmarkHook();
  const [dummyData, setDummyData] = useState([]);
  const maxPostsToShow = 3;
  const userIdToShow = '이순신'; // 사용자의 user_id

  useEffect(() => {
    getDummyPosts().then(data => {
      setDummyData(data);
    });
  }, []);

  const filteredData = dummyData.filter(post => post.user_id === userIdToShow).slice(0, maxPostsToShow);


  return (
      <>
          <section className='card_wrap'>
              <div className='inner_card1'>
              <h1>내 블로그 글</h1>
                <div className='card_article' >
                    {filteredData.map((post) => (
                      <div className='card_3' key={post.id}>
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
                              <div>
                                  <button className={`like-icon ${likedPosts.includes(post.id) ? 'on' : ''}`}
                                      onClick={() => handleLikeClick(post.id)}></button>
                                  <button className={`bookmark-icon ${bookmarkedPosts.includes(post.id) ? 'on' : ''}`}
                                      onClick={() => handleBookmarkClick(post.id)}></button>
                              </div>             
                          </div>
                      </div>
                      ))}
                </div>
              <Link to='/postlist_user' className='go_v'>내 블로그 보러가기 <span>→</span></Link>
              </div>
          </section>
      </>
  )
}

export default UserBlog
