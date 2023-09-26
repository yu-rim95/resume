import React, { useState } from 'react';

function TitleArea() {
  const [title, setTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(''); // 선택된 카테고리 상태

  const categories = ['부동산', '투자', '인테리어']; // 카테고리 옵션들

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };


  /*태그영역 */
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');


  const handleTagInputChange = (event) => {
    setTagInput(event.target.value);
  };
  
  const handleTagInputKeyDown = (event) => {
    if (event.key === 'Enter' && tagInput.trim() !== '') {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };
  
  const handleRemoveTag = (indexToRemove) => {
    const newTags = tags.filter((_, index) => index !== indexToRemove);
    setTags(newTags);
  };

  return (
    <>
      <div className='kate-select'>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">카테고리 선택</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className='title-input'>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={handleTitleChange}
        />
      </div>

      <div className='tag-wrap'>
        {tags.map((e, i) => (
            <div className='hash' key={i} onClick={() => handleRemoveTag(i)}>
              <div>{e}</div>
            </div>
          ))}

          <input
            placeholder="태그를 입력해주세요"
            onChange={(e) => handleTagInputChange(e)}
            onKeyPress={(e) => handleTagInputKeyDown(e)}
            value={tagInput}
          />
      </div>
    </>
  );
}

export default TitleArea;
