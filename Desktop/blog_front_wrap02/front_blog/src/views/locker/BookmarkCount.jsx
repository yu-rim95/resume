import './Locker.scss'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { getDummyPosts } from '../../apis/dummyApi';

function BookmarkCount() {
    const [bookmarkedPosts, setbookmarkedPosts] = useState([]);
    const [hideCListN, setHideCListN] = useState(true);

    useEffect(() => {
        getDummyPosts().then(data => {
          const bookmarkedPosts = data.filter(post => post.bookmarked);
          setbookmarkedPosts(bookmarkedPosts);

           // 모든 bookmarkedPosts true 경우 c_list_N 숨기기
           if (bookmarkedPosts.every(post => !post.favorite)) {
            setHideCListN(false);
           }
        });
      }, []);
    return(
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
                    {bookmarkedPosts.map((post) => (
                        <div className='card_1' key={post.id}>
                              <Link to='/post-detail' target='_blank'  >
                                    <div className='card_img'><img src={post.thumbnail} alt="Thumbnail" /></div>
                                    <div className='card_t_th'>
                                        <h2>{post.title}</h2>
                                        <p>{post.content}</p>
                                    </div>
                                </Link>
                                <div className='card_icon'>
                                    <div className='card_u'>by<span>{bookmarkedPosts[0]?.user_id}</span></div>
                                    <button className="like-icon"></button>
                                    <button className='bookmark-icon'></button>
                                </div>
                        </div>   
                    ))}
                 
                </div>
            </div>  
                {/*북마크 없을때*/}
                {hideCListN ? null : (
              <div className='c_list_N'>
                  <i className='warning-icon'></i>
                  <p>북마크 한 글이 없습니다.</p>
              </div>
            )}        
            </div>
        </>
      )
}

export default BookmarkCount
