import React, { useState } from 'react';

export default function CommentForm(props) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert('댓글 내용을 입력하세요.');
      return;
    }else{
      alert('댓글 작성이 완료되었습니다.')
    }

    props.onSubmit(value);
    setValue('');
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <li className="d2_comment_form">
      <form onSubmit={handleSubmit} className='cf_cont'>
        <span className="ps_box">
          <textarea
            type="text"
            className="int"
            placeholder="댓글을 작성하세요"
            onChange={handleChange}
            value={value}
          />
        </span>
        <button type="submit" className="btn_b">댓글작성</button>
      </form>
    </li>
  );
}
