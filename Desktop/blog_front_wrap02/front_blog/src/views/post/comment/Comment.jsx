import './Comment.scss'
import React, { useState, useEffect } from 'react';
import CommentForm from './CommentForm'
import CommentList from './CommentList'

function Comment() {
    const [list, setList] = useState([]);
  
    useEffect(() => {
      setList([
        { userid: '텀블러', content: '베스트댓글', date: '2023-09-06' },
        { userid: '홍길동', content: '테스트댓글이다', date: '2023-09-06' },
        { userid: '홍길동홍길동', content: '테스트댓글이다', date: '2023-09-06' },
      ]);
    }, []);
  
    const addList = (content) => {
      setList([...list, { userid: '게스트1', content: content, date: '2023-09-06' }]);
    };
  
    const updateList = (updatedList) => {
      setList(updatedList);
    };
  
    return (
      <>
         <div className='d2_comment_tit'>
          댓글 <span>({list.length})</span>
        </div>
        <ul className='d2_comment'>
          <CommentForm onSubmit={(content) => addList(content)} />
          <CommentList list={list} updateList={updateList}  />
        </ul> 
      </>
    );
  }
  
  export default Comment;