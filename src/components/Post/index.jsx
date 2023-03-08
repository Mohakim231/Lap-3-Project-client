import React from 'react'
import './styles.css'

const Post = ({ handleCancel}) => {
  return (
    <div className='post-form-container'>
        <div className='post-form-wrapper'>
            <section className='post'>
                <header>Create Note</header>
                <form>
                  <div className='content'>
                    <img src='' alt=''/>
                    <div className='details'>
                      <p>Username</p>
                      <div className='privacy'>
                        <span>Public</span>
                      </div>
                    </div>
                  </div>
                  <input className='note-input-title' placeholder='Title?'/>
                  <textarea placeholder="what's on your mind UserName" aria-label="what's on your mind"></textarea>
                  <input className='note-input-category' placeholder='category?'/>
                  <div className='options'>
                    <p>Add to your note..</p>
                  </div>
                  <button aria-label="post button">Post</button>
                  <button aria-label="delete button" onClick={handleCancel}>Cancel</button>
                </form>
            </section>
        </div>
    </div>
  )
}

export default Post