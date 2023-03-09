import React, { useEffect, useState } from 'react'
import { Note } from '../../components'

const PublicNotes = () => {

    const [note, setNote] = useState([]);
    const [noteId, setNoteId] = useState('')


    useEffect(() => {
    async function loadNote() {
        const response = await fetch('http://localhost:3000/note/public');
        const data = await response.json();
        console.log(data)
        setNote(data);
    }
    loadNote()
    }, [])
    
    
    
    function showNote() {
    return note.map(n => <Note key={n.note_id} id={n.note_id} title={n.note_title} content={n.note_content} category={n.note_category}/>)
    }
    
  return (
    <div>{showNote()}</div>
  )
}

export default PublicNotes