import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import CommentPost from '../Comment';
import './styles.css';

const PublicNote = (props) => {
  const category = props.id;
  const [note, setNote] = useState([]);
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [showCommentSection, setShowCommentSection] = useState(false);

  useEffect(() => {
    const fetchItem = async () => {
      const response = await axios.get(`http://localhost:3000/forum/${category}`, { category });
      setNote(response.data);
    };

    fetchItem();
  }, [category]);

  const handleNoteClick = (noteId) => {
    if (selectedNoteId === noteId) {
      setShowCommentSection((prevShowCommentSection) => !prevShowCommentSection);
    } else {
      setSelectedNoteId(noteId);
      setShowCommentSection(true);
    }
  };

  const handleCloseCommentSection = () => {
    setSelectedNoteId(null);
    setShowCommentSection(false);
  };

  return (
    <>
      {note.map((e, i) => (
        <div className={`note-wrapper ${i % 3 === 0 ? 'purple' : i % 3 === 1 ? 'yellow' : 'green'}`} key={e.note_id}>
          <div className='note-title'>{e.note_title}</div>
          <div className='note-content'>
            <div>{e.note_content}</div>
            <img src='' alt='' />
          </div>
          <p className='category-note-page'>{e.note_category}</p>
          <button className='comments-show-button' onClick={() => handleNoteClick(e.note_id)}>
            {selectedNoteId === e.note_id && showCommentSection ? 'Comments' : 'Comments'}
          </button>
          {selectedNoteId === e.note_id && showCommentSection && (
            <div className='commentSection'>
              <CommentPost note_id={e.note_id} handleCloseCommentSection={handleCloseCommentSection}/>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default PublicNote;
