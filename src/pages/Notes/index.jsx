import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Notes = () => {
  const [userId, setUserId] = useState(1)
  const [privateNote, setPrivateNote] = useState([]);

  useEffect(() => {

    const fetchNote = async () => {

      const response = await axios.post(`http://localhost:3000/note/private`, ({ "user_id": userId }))
      setPrivateNote(response.data);
      console.log(privateNote)
    }

    fetchNote()

  }, [])



  return (
    <div>
      {privateNote.map((e, i) => (
        < div className='note-wrapper' key={e.note_id} >
          <div className='note-title'>{e.note_title}</div>
          <div className='note-content'>
            <div>{e.note_content}</div>
            <p>{e.note_category}</p>
            <img src='' alt='' />
          </div>
        </div >
      ))}
    </div>
  )
}

export default Notes
