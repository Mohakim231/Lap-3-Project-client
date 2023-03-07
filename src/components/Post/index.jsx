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
                  <textarea placeholder="what's on your mind UserName"></textarea>
                  <input className='note-input-category' placeholder='category?'/>
                  <div className='options'>
                    <p>Add to your note..</p>
                  </div>
                  <button>Post</button>
                  <button onClick={handleCancel}>Cancel</button>
                </form>
            </section>
        </div>
    </div>
  )
}

export default Post