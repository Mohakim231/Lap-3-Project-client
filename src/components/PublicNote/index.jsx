import React, { useState, useEffect } from 'react'
import axios from '../../api/axios';

const PublicNote = (props) => {
    const category = props.id
    const [note, setNote] = useState('');

    useEffect(() => {


        const fetchItem = async () => {
            const response = await axios.post(`http://localhost:3000/note/forum/${category}`, ({ "category": `${category}` }));
            console.log(response.data)
            setNote(response.data)
        }


        fetchItem()
    }, [category]);

    return (
        <div className='note-wrapper' key={note.note_id}>
            <div className='note-title'>{note.note_title}</div>
            <div className='note-content'>
                <div>{note.note_content}</div>
                <p>{note.note_category}</p>
                <img src='' alt='' />
            </div>
        </div>
    )
}

export default PublicNote
