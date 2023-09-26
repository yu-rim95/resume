import React, { useState } from 'react';

function CommentReply(props) {
  const [replyValue, setReplyValue] = useState('');

  const handleReplyChange = (e) => {
    setReplyValue(e.target.value);
  };

  const handleReplySubmit = () => {

    props.addReply(replyValue); // 대댓글을 추가하는데 입력한 내용을 전달
    if (!replyValue) {
      alert('댓글 내용을 입력하세요.');
      return;
    }else{
      alert('댓글 작성이 완료되었습니다.')
    }
    setReplyValue(''); // 입력 필드 초기화
  };

  return (
    <div className='comment-reply-form'>
      <textarea
        type='text'
        value={replyValue}
        onChange={handleReplyChange}
        placeholder='댓글을 입력하세요.'
      />
      <button className='btn_g' onClick={handleReplySubmit}>
        댓글 작성
      </button>
    </div>
  );
}

export default CommentReply;
