import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useAuth } from "../../context"

const Notes = () => {
  const { user, setUser } = useAuth();
  const [privateNote, setPrivateNote] = useState([]);


  useEffect(() => {
    const userid = localStorage.getItem("user")
    const fetchNote = async () => {

      const response = await axios.post(`http://localhost:3000/note/private`, ({ "user_id": userid }))

      console.log(response)
      setPrivateNote(response.data);
      console.log(user)
    }

    fetchNote()

  }, [user])



  return (
    <div>
      {privateNote.map((e, i) => (
        < div className='note-wrapper' key={e.note_id} >
          <div className='note-title'>{e.note_title}</div>
          <div className='note-content' aria-label="note content">
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
