import './PostList.scss'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../components/header/Header'
import { getDummyPosts } from '../../../apis/dummyApi'
import useLikeBookmarkHook from '../../../hooks/useLikeBookmarkHook'

function UserPostList() {
  const userIdToShow = '이순신';
  const { likedPosts, bookmarkedPosts, handleLikeClick, handleBookmarkClick } = useLikeBookmarkHook();
  const [dummyData, setDummyData] = useState([]);

  useEffect(() => {
    getDummyPosts().then(data => {
      setDummyData(data);
    });
  }, []);

  const filteredData = dummyData.filter(post => post.user_id === userIdToShow);
  
  return (
    <>
        <Header/>
        <div className='post_wrap'>
        <h1>내 블로그</h1>
        <section className='post_v1'>
            <div className='kate_v1'>  
                <p><i className='i_kate'></i>카테고리</p>
                <ul>
                    <li className='kate_menu'>두 번째 카테고리 <span>(3)</span></li>
                    <li className='kate_menu on'>세 번째 카테고리 <span>(3)</span></li>
                </ul>
            </div>

            <div className='post_s'>
                <div className="search-container">
                    <div className="search-input">
                        <p>제목</p>
                        <input type="text" placeholder="검색어를 입력하세요"/>
                        <button><i  className="i_search"></i></button>
                    </div>
                    <div className="search-result">
                        <p>총 <span>50</span>개의 글을 찾았습니다.</p>
                        <p className="result_n">검색 결과가 없습니다.</p>
                    </div>
                </div> 
                <div className='post_btn'>
                    <Link to='/write' className='btn-bw'>글작성</Link>
                    <Link to='/postStash' className='btn-bw'>임시글</Link>
                </div>
            </div>

            <div className='crad_wrap' >
              {filteredData.map((post) => (
                    <div className='card_1' key={post.id}>
                        <Link to='/post-detail' target='_blank'  >
                                {post.thumbnail ? (
                                    <div className='card_img'><img src={post.thumbnail} alt="썸네일" /></div>
                                ) : null}
                                <div className={post.thumbnail ? 'card_t_th' : 'card_t_tn'}>
                                    <h2>{post.title}</h2>
                                    <p>{post.content}</p>
                                </div>
                        </Link>

                        <div className='card_icon'>
                          <div className='card_u'>by<span>{post.user_id}</span></div>
                            <button className={`like-icon ${likedPosts.includes(post.id) ? 'on' : ''}`}
                              onClick={() => handleLikeClick(post.id)}></button>
                            <button className={`bookmark-icon ${bookmarkedPosts.includes(post.id) ? 'on' : ''}`}
                              onClick={() => handleBookmarkClick(post.id)}></button>
                        </div>
                    </div>
              ))}
              </div>
        </section>
      </div>
    </>
  )
}

export default UserPostList
