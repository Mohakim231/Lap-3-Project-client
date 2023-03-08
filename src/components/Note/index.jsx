import React from 'react'
import './styles.css'

const Note = ({ id, title, content, category}) => {
  return (
    <div className='note-wrapper'>
        <div className='note-title' aria-label='noteTitle'>{title}</div>
        <div className='note-content'>
            <div>{content}</div>
            <p>{category}</p>
            <img src='' alt=''/>
        </div>
    </div>
  )
}

export default Note