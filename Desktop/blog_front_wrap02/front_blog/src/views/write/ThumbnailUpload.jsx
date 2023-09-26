import React, { Component } from 'react';

class ThumbnailUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnailFile: null,
    };
  }

  handleThumbnailChange = (event) => {
    const file = event.target.files[0];
    this.setState({ thumbnailFile: file });
  };

  handleThumbnailRemove = () => {
    this.setState({ thumbnailFile: null });
  };

  render() {
    const { thumbnailFile } = this.state;

    return (
      <>
            <div className='thum_wrap'>
                {/* <h2>썸네일 업로드</h2> */}
                <div className='thum_cont'>
                    <div className="thumbnail-preview">
                    {thumbnailFile ? (
                        <div className='y-thumbnail'>
                        <img
                            src={URL.createObjectURL(thumbnailFile)}
                            alt="썸네일 미리보기"
                            style={{ maxWidth: '100%', maxHeight: '200px' }}
                        />
                            <button onClick={this.handleThumbnailRemove}><span>썸네일 삭제</span><i className='i-x-icon'></i></button>
                            </div>
                        ) : (
                            <div className="no-thumbnail"></div>
                        )}
                    </div>
                      <input
                      type="file"
                      accept="image/*"
                      onChange={this.handleThumbnailChange}
                      />
                </div>
            </div>
      </>
    );
  }
}

export default ThumbnailUpload;
