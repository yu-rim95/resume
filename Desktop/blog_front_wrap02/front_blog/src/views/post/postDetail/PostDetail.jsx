import './PostDetail.scss'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../components/header/Header'
import Comment from '../comment/Comment'

function PostDetail() {
  const [copySuccess, setCopySuccess] = useState(false);
  
  const handleCopyClick = () => {
    const url = window.location.href;

    const textArea = document.createElement('textarea');
    textArea.value = url;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    setCopySuccess(true);

    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

    // 테스트용 포스트 데이터
    const postData = {
      title: '닥터빌드의 소규모주택정비사업이란?',
      author: '닥터빌드',
      date: '2023.09.19',
      content: `
      닥터빌드의 소규모주택정비사업은 소유자들이 가지고 있는 노후주택 자산을 소규모주택 정비사업을 통하여 최적의 용적률과 사업비용, 최고품질의 건축으로 조합원의 수익을 극대화 하는 것을 목표로 하며, 사업초기부터 마지막까지 PM 및 정비업무를 담당하여 협력 1군 시공사와 함께 진행합니다.
        `,
      tags: ['자율주택정비사업', '소규모주택정비사업'],
    };

    return (
      <>
        <Header />
        <div className='postD_wrap'>
          <div className='d1_wrap'>
            <h1>{postData.title}</h1>
            <div className='d1_cont'>
              <div className='d1_tit'>
                by<span> {postData.author}</span>
                <span> {postData.date}</span>
              </div>
              <div className='d1_icon'>
                <button
                  onClick={handleCopyClick}
                  className={`link-icon ${copySuccess ? 'on' : ''}`}
                >
                  링크
                </button>
                <button className='like-icon'>좋아요</button>
                <button className='bookmark-icon'>북마크</button>
              </div>
            </div>
          </div>
  
          <section className='d2_wrap'>
            <div className='d2_tag'>
              <ul>
                {postData.tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
            </div>
  
            <div className='d2_cont'>
              <p>{postData.content}</p>
              <div className='d2_i'>
                <button className='correction-icon'>수정</button>
                <button className='delete-icon'>삭제</button>
              </div>
            </div>
  
            <div className='d2_move'>
              <button className='prev-icon'>prev</button>
              <Link to='/postlist' className='btn_n'>
                전체목록
              </Link>
              <button className='next-icon'>next</button>
            </div>
            <Comment />
          </section>
        </div>
      </>
    );
  }
  
  export default PostDetail;