import React from 'react'
import './styles.css'

const Note = ({ id, title, content, category}) => {
  return (
    <div className='note-wrapper'>
        <div className='note-title' aria-label='noteTitle'>{title}</div>
        <div className='note-content'>
            <div>{content}</div>
        </div>
        <p className='category-note-page'>{category}</p>
    </div>
  )
}

export default Note