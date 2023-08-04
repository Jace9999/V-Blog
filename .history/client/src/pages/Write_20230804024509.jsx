import React from 'react'
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'

export const Write = () => {
  return (
    <div className='add'>
      <div className='content'>
        <input type="text" placeholder='Title'/>
        <div className="editContainer">
          
        </div>
      </div>
      <div className='menu'>
        <div className='item'>1</div>
      </div>
    </div>
  )
}
