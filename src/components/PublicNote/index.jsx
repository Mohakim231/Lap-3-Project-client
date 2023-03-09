import React, { useState, useEffect } from 'react'
import axios from '../../api/axios';

const PublicNote = (props) => {
    const category = props.id
    const [note, setNote] = useState([]);

    useEffect(() => {


        const fetchItem = async () => {
            const response = await axios.get(`http://localhost:3000/forum/${category}`, ({ "category": `${category}` }));
            setNote(response.data)
        }


        fetchItem()
    }, [category]);

    return (
        <>
            {note.map((e, i) => (
                < div className='note-wrapper' key={e.note_id} >
                    <div className='note-title'>{e.note_title}</div>
                    <div className='note-content'>
                        <div>{e.note_content}</div>
                        <p>{e.note_category}</p>
                        <img src='' alt='' />
                    </div>
                </div >
            ))}
        </>
    )
}

export default PublicNote
