import React, { useState } from 'react'
import './styles.css'

const Post = ({ handleCancel}) => {
  const [showImage, setShowImage] = useState(false)
  const [inputTitle, setInputTitle] = useState('')
  const [inputNote, setInputNote] = useState('')
  const [inputCategory, setInputCategory] = useState('')
  const [visibility, setVisibility] = useState(false)

  function handleTitle(e) {
    setInputTitle(e.target.value)
  }

  function handleNote(e) {
    setInputNote(e.target.value)
  }

  function handleCategory(e) {
    setInputCategory(e.target.value)
  }

  const handleImageClick = () => {
    setShowImage(true)
  }
  const handleCloseImage = () => {
    setShowImage(false)
  }
  const handleVisbility = () => {
    setVisibility(prevVisibility => !prevVisibility)
  }
  function handlePost(e){
    e.preventDefault();
    if(inputTitle.length > 0 && inputNote.length > 0 && inputCategory.length > 0){
      fetch('http://localhost:3000/note/create',{
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ title: inputTitle, content: inputNote, category: inputNote, user_id: 1, isPublic: visibility})
      })
      .then((res) => res.json())
      .then((data) => {
        window.alert('well done mo you are smart')
      })

    } else {
      window.alert('cant be empty can it')
    }
  }
  return (
    <>
    <div className='post-form-container'>
        <div className='post-form-wrapper'>
            <section className='post'>
                <header aria-label="create note box heading">Create Note</header>
                <form>
                  <div className='content'>
                    <img src='' alt=''/>
                    <div className='details'>
                      <p>Username</p>
                      <div className='privacy'>
                        <span onClick={handleVisbility}>{visibility ? 'Public': 'Private'}</span>
                      </div>
                    </div>
                  </div>
                  <input className='note-input-title' placeholder='Title?' value={inputTitle} onChange={handleTitle}/>
                  <textarea placeholder="what's on your mind UserName" value={inputNote} onChange={handleNote} aria-label="what's on your mind"></textarea>
                  <input className='note-input-category' placeholder='category?' value={inputCategory} onChange={handleCategory}/>
                  <div onClick={handleImageClick} className='options'>
                    <p>Add images to your note..</p>
                  </div>
                  <button aria-label="post button" onClick={handlePost}>Post</button>
                  <button aria-label="delete button" onClick={handleCancel}>Cancel</button>
                </form>
            </section>
        </div>
    </div>
    <div>
      {showImage ? (
        <div>
          <div onClick={handleCloseImage}>X</div>
          <form className='imageForm'>
            <label for="imageURL">URL</label>
            <input placeholder='Post your url here..' type="text" id="imageURL" name="imageURL"/>
            <button>Submit</button>
          </form>
        </div>
      ):(<div></div>)}
    </div>
    </>
  )
}

export default Post