import React, { useState } from 'react';
import './Comment.scss';
import CommentReply from './CommentReply';

function CommentList(props) {
  const [value, setValue] = useState('');
  const [update, setUpdate] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // 수정 모드 여부를 나타내는 상태 변수
  const [showReplyForm, setShowReplyForm] = useState(false);

  // 대댓글 
  const [replyList, setReplyList] = useState([]);
  const [replyValue, setReplyValue] = useState('');

  const updateChange = (e) => {
    setValue(e.target.value);
  };

  const applyUpdate = (i) => {
    alert('댓글 수정 완료하였습니다')

    const newList = [...props.list];
    newList[i].content = value;
    setUpdate(null);
    setIsEditing(false); // 수정 완료 후 수정 모드 종료
    props.updateList(newList);
  };

  const cancelEdit = () => {
    setUpdate(null);
    setIsEditing(false); // 취소 버튼을 누를 경우 수정 모드 종료
  };

  const deleteClick = (k) => {
   const shouldDelete = window.confirm('이 댓글을 삭제하시겠습니까?');
    if(shouldDelete){
      const newList = [...props.list].filter((v, i) => i !== k);
      props.updateList(newList);
    }

  };

  const editClick = (k) => {
    setUpdate(k);
    setValue(props.list[k].content);
    setIsEditing(true); // 수정 모드로 전환
  };

  const toggleReplyForm = () => {
    setShowReplyForm(!showReplyForm); // 댓글 답글 폼의 표시 여부를 토글
  };

   // 대댓글 추가 함수
   const addReply = (reply) => {
    if (!reply) {
      alert('댓글 내용을 입력하세요.');
      return;
    }
    const newReplyList = [...replyList, reply];
    setReplyList(newReplyList);
    setReplyValue('');
    setShowReplyForm(false); // 댓글 작성이 완료되면 대댓글 입력 폼을 닫음
  };

  const items = () =>
    props.list.map((v, k) => (
      <div className='comment-row' key={k}>
        <div className='cm_img'>
          <img src={process.env.PUBLIC_URL + `/images/profil_none.png`} alt='Thumbnail' />
        </div>

        <div className='cm_cont'>
          <div className='cm-id'>
            <p className='comment-id'>{v.userid}</p>
            <p className='comment-date'>{v.date}</p>
          </div>
          <div className='comment-content'>
            {update === k ? (
              <textarea
                type='text'
                value={value}
                className='comment-update-input'
                onChange={updateChange}
              />
            ) : (
              <span>{v.content}</span>
            )}
          </div>
          {isEditing && update === k ? (
            <>
              <button className='btn_g' onClick={() => applyUpdate(k)}>적용</button>
              <button className='btn_g' onClick={cancelEdit}>취소</button>
            </>
          ) : (
            <>
               <button className='btn_g' onClick={toggleReplyForm}>
                답글달기
              </button>
              <button className='btn_g' onClick={() => editClick(k)}>수정하기</button>
              <button className='btn_g' onClick={() => deleteClick(k)}>삭제</button>
              {showReplyForm && <CommentReply addReply={addReply} />}
                {/* 렌더링 대댓글 목록 */}
                {replyList.length > 0 && (
                  <ul className='reply-list'>
                    {replyList.map((reply, index) => (
                      <li key={index}>
                        <div className='reply_row'>
                          <div className='cm_img'>
                              <img src={process.env.PUBLIC_URL + `/images/profil_none.png`} alt='Thumbnail' />
                          </div>
                          <div>
                            <div className='rl-id'>
                                  <p className='reply-id'>{v.userid}</p>
                                  <p className='reply-date'>{v.date}</p>
                              </div>
                            <div className='reply-content'>{reply}</div>
                          </div>
                        </div>
                        <div className='rl_btn'>
                          {/* <button className='btn_g' onClick={toggleReplyForm}>답글달기</button> */}
                            <button className='btn_g'>수정하기</button>
                            <button className='btn_g'>삭제</button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
            </>
          )}
          
        </div>

        
      </div>
    ));

    return <li className='d2_comment_list'>{items()}</li>;
}

export default CommentList;
