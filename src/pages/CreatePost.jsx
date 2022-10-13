import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../style.scss';

export default function CreatePost() {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState('');

  const handlePublish = async (e) => {
    e.preventDefault();

  }
  
  return (
    <div className='create-post'>
      <div className="container">
        <div className="section-1">
          <div className="title">
            <input type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <div className="desc">
            <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
          </div>
        </div>
        <div className="section-2">
          <div className="sub-section-1">
            <h3>Publish</h3>
            <div className="status">
              <b>Status: </b>Draft
            </div>
            <div className="visibility">
              <b>Visibility: </b>Public
            </div>
            <div className="upload-img">
              <label htmlFor='my-file' style={{cursor:'pointer'}} onChange={(e) => setFile(e.target.files[0])}><b>Upload a File</b>📁</label>
              <input style={{display:'none'}} type='file' id='my-file' name='file'/>
            </div>
            <div className="buttons">
              <button>Save Draft</button>
              <button onClick={handlePublish}>Publish</button>
            </div>
          </div>
          <div className="sub-section-2">
            <h3>Category</h3>
            <div className="cat">
              <input type='radio' name='cat' value='art' id='art' onChange={(e) => setCategory(e.target.value)}/>
              <label htmlFor='art'>Art</label>
            </div>
            <div className="cat">
              <input type='radio' name='cat' value='science' id='science' onChange={(e) => setCategory(e.target.value)}/>
              <label htmlFor='science'>Science</label>
            </div>
            <div className="cat">
              <input type='radio' name='cat' value='tech' id='tech' onChange={(e) => setCategory(e.target.value)}/>
              <label htmlFor='tech'>Technology</label>
            </div>
            <div className="cat">
              <input type='radio' name='cat' value='design' id='design' onChange={(e) => setCategory(e.target.value)}/>
              <label htmlFor='design'>Design</label>
            </div>
            <div className="cat">
              <input type='radio' name='cat' value='food' id='food' onChange={(e) => setCategory(e.target.value)}/>
              <label htmlFor='food'>Food</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
