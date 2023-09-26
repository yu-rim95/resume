import './Locker.scss'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { getDummyPosts } from '../../apis/dummyApi';

function FavoriteCount() {
    const [favoritePosts, setfavoritePosts] = useState([]);
    const [hideCListN, setHideCListN] = useState(true);

    useEffect(() => {
        getDummyPosts().then(data => {
          const favoritePosts = data.filter(post => post.favorite);
          setfavoritePosts(favoritePosts);

           // 모든 favoritePosts가 true 경우 c_list_N 숨기기
           if (favoritePosts.every(post => !post.favorite)) {
            setHideCListN(false);
          }
        });
      }, []);
  return (
    <>
        <div className="c_list_v1">
            <div className='c_list_Y'>
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
                <div className='crad_wrap'>
                {favoritePosts.map((post) => (
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
                                <div className='card_u'>by<span>{favoritePosts[0]?.user_id}</span></div>
                                <button className="like-icon"></button>
                                <button className='bookmark-icon'></button>
                            </div>
                        </div>
                    ))}
                 
                </div>
            </div>  
            {/*좋아요 없을때*/}
            {hideCListN ? null : (
              <div className='c_list_N'>
                  <i className='warning-icon'></i>
                  <p>좋아요 한 글이 없습니다.</p>
              </div>
            )}     
        </div>
    </>
  )
}

export default FavoriteCount
