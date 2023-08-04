import React from 'react'
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'


export const Write = () => {
  return (
    <div className='add'>
      <div className='content'>
        <input type="text" placeholder='Title'/>
        <div className="editContainer">
        <ReactQuill className="editor" theme="snow" 
        value={value} onChange={setValue}/>
        </div>
      </div>
      <div className='menu'>
        <div className='item'>
          <h1>Publish</h1>
          <span><b>Status:</b> Draft</span>
          <span><b>Visibility:</b> Public</span>
          <input style={{display:"none"}} type='file'/>
          <label htmlFor='file'>Upload Image</label>
          <div className='buttons'>
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <input type="radio" name="cat" value="art"/>
          <label htmlFor='art'>Art</label>
          <input type="radio" name="cat" value="science"/>
          <label htmlFor='science'>Science</label>
          <input type="radio" name="cat" value="technology"/>
          <label htmlFor='technology'>Technology</label>
          <input type="radio" name="cat" value="cinema"/>
          <label htmlFor='cinema'>Cinema</label>
          <input type="radio" name="cat" value="design"/>
          <label htmlFor='design'>Design</label>
          <input type="radio" name="cat" value="food"/>
          <label htmlFor='food'>Food</label>
        </div>
      </div>
    </div>
  )
}
