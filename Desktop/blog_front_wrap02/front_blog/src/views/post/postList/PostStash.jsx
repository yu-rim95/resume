import React from 'react'
import './PostList.scss'
import Header from '../../../components/header/Header'

function PostStash() {
  return (
    <>
      <Header/>
      <div className='post_wrap'>
        <h1>임시 글 목록</h1>
        <div className='no_post' style={{display:'none'}}>
            <i className='warning-icon'></i>
            <p>임시 저장한 글이 없습니다.</p>
        </div>
        <section>
             <div className='crad_stash'>
                <h2>역사를꾸며</h2>
                <p>임시글시글시글시글시글시글</p>
                <button><i className='minus-icon'></i></button>
             </div>
        </section>
      </div>
    </>
  )
}

export default PostStash
