import React from 'react'
import './styles.css'

const Note = ({title, content, category, i}) => {
  return (
    <div className={`note-wrapper ${i % 3 === 0 ? 'purple' : i % 3 === 1 ? 'yellow' : 'green'}`}>
        <div className='note-title' aria-label='noteTitle'>{title}</div>
        <div className='note-content'>
            <div>{content}</div>
        </div>
        <p className='category-note-page'>{category}</p>
    </div>
  )
}

export default Note