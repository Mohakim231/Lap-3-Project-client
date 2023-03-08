import React from 'react'
import './styles.css'

const Note = () => {
  return (
    <div className='note-wrapper'>
        <div className='note-title' aria-label='noteTitle'>Title...</div>
        <div className='note-content'>
            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur enim, sit eos dolore ipsa libero voluptatibus consequatur facilis quas atque illo similique perferendis laborum debitis vero quae fuga voluptatem quibusdam?</div>
            <img src='' alt=''/>
        </div>
    </div>
  )
}

export default Note