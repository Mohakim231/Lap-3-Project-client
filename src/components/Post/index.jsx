import React from 'react'
import './styles.css'

const Post = () => {
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
                        <i></i>
                        <span>Public</span>
                        <i className=''></i>
                      </div>
                    </div>
                  </div>
                  <textarea placeholder="what's on your mind UserName"></textarea>
                  <div className='options'>
                    <p>Add to your note..</p>
                    <div className='list'>
                      <img src='' alt=''/>
                    </div>
                  </div>
                  <button>Post</button>
                </form>
            </section>
        </div>
    </div>
  )
}

export default Post