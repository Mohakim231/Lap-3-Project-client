import React, { useState } from 'react'

const PublicNote = (props) => {
    const id = props.id
    const [note, setNote] = useState('');

    const fetchItem = async () => {
        const response = await fetch(`http://localhost:3000/note/forum/${id}`);
        const item = await response.json()
        setNote(item.data)
    }
    useEffect(() => {
        fetchItem()
    }, [id]);

  return (
    <div className='note-wrapper' key={note.note_id}>
        <div className='note-title'>{note.note_title}</div>
        <div className='note-content'>
            <div>{note.note_content}</div>
            <p>{note.note_category}</p>
            <img src='' alt=''/>
        </div>
    </div>
  )
}

export default PublicNote