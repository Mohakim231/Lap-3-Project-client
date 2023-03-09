import React, { useState } from 'react';
import './styles.css';
import { useAuth } from '../../context';

const Post = ({ handleCancel }) => {
  const { user_name } = useAuth()
  const [showImage, setShowImage] = useState(false);
  const [inputTitle, setInputTitle] = useState('');
  const [inputNote, setInputNote] = useState('');
  const [inputCategory, setInputCategory] = useState('');
  const [visibility, setVisibility] = useState(false);
  const [fileInput, setFileInput] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [previewSource, setPreviewSource] = useState('');

  function handleTitle(e) {
    setInputTitle(e.target.value);
  }

  function handleNote(e) {
    setInputNote(e.target.value);
  }

  function handleCategory(e) {
    setInputCategory(e.target.value);
  }

  const handleImageClick = () => {
    setShowImage(true);
  };

  const handleCloseImage = () => {
    setShowImage(false);
  };

  const handleVisbility = () => {
    setVisibility((prevVisibility) => !prevVisibility);
  };

  const handlePost = async (e) => {
    e.preventDefault();

    if (inputTitle.length > 0 && inputNote.length > 0 && inputCategory.length > 0) {
      try {
        // Encode the image to base64
        const base64EncodedImage = previewSource.split(',')[1];

        // Send both requests in parallel
        await Promise.all([
          // Send the note data to the create note endpoint
          fetch('http://localhost:3000/note/create', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
              title: inputTitle,
              content: inputNote,
              category: inputNote,
              user_id: 1,
              isPublic: visibility,
            }),
          }).then((res) => res.json()),
          // Send the base64-encoded image data to the image upload endpoint
          fetch('http://localhost:3000/image/upload', {
            method: 'POST',
            body: JSON.stringify({ data: base64EncodedImage }),
            headers: { 'Content-type': 'application/json' },
          }).then((res) => res.json()),
        ]);

        window.alert('well done mo you are smart');
      } catch (error) {
        console.log(error);
        window.alert('An error occurred while submitting the post.');
      }
    } else {
      window.alert('Fields cannot be empty.');
    }
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    preview(file);
  };

  const preview = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
  };

  const uploadImage = async (base64EncodedImage) => {
    console.log(base64EncodedImage);
    try {
      await fetch('', {
        method: 'POST',
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { 'Content-type': 'application/json' },
      });
    } catch (error) {
      console.log(error);
      window.alert('An error occurred while uploading the image.');
    }
  };
  return (
    <>
      <div className='post-form-container'>
        <div className='post-form-wrapper'>
          <section className='post'>
            <header>Create Note</header>
            <form>
              <div className='content'>
                <img src='' alt='' />
                <div className='details'>
                  <p>{user_name}</p>
                  <div className='privacy'>
                    <span onClick={handleVisbility}>{visibility ? 'Public' : 'Private'}</span>
                  </div>
                </div>
              </div>
              <input className='note-input-title' placeholder='Title?' value={inputTitle} onChange={handleTitle} />
              <textarea placeholder="what's on your mind UserName" value={inputNote} onChange={handleNote}></textarea>
              <input className='note-input-category' placeholder='category?' value={inputCategory} onChange={handleCategory} />
              <div onClick={handleImageClick} className='options'>
                <p>Add images to your note..</p>
              </div>
              <button onClick={handlePost}>Post</button>
              <button onClick={handleCancel}>Cancel</button>
            </form>
          </section>
        </div>
      </div>
      <div>
        {showImage ? (
          <div>
            <div onClick={handleCloseImage}>X</div>
            <form className='imageForm' onSubmit={handleSubmitFile}>
              <label for="imageURL">URL</label>
              <input placeholder='Post your url here..' type="file" id="imageURL" name="imageURL" value={fileInput} onChange={handleFileInput} />
              <button type='submit'>Submit</button>
            </form>
            {previewSource && (
              <img src={previewSource} alt='chosen image' style={{ height: '300px' }} />
            )}
          </div>
        ) : (<div></div>)}
      </div>
    </>
  )
}

export default Post
