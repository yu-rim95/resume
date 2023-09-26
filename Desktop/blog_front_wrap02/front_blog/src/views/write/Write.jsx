import './Write.scss'
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import TitleArea from './TitleArea'
import EditorArea from './EditorArea'
import ThumbnailUpload from './ThumbnailUpload'; 
import Header from '../../components/header/Header';

class Write extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorContent: '',
    };
  }

  handleEditorChange = (content) => {
    this.setState({ editorContent: content });
  };

  render() {
    return (
      <>
        <Header/>
        <div  className='w_wrap'>
            <TitleArea />
            <EditorArea
            value={this.state.editorContent}
            onChange={this.handleEditorChange}
            />
            <ThumbnailUpload />
            <div className='post_btn'>
            <Link to='/postStash' className='btn_n'>임시저장</Link>
            <button className='btn_n'>출간하기</button>
            </div>
        </div>
      </>
    );
  }
}

export default Write;