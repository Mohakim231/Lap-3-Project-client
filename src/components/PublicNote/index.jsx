import React, { useState, useEffect } from 'react'
import axios from '../../api/axios';
import { CommentPost } from '../index'

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
                < div className={`note-wrapper ${i % 3 === 0 ? 'purple' : i % 3 === 1 ? 'yellow' : 'green'}`} key={e.note_id} >
                    <div className='note-title'>{e.note_title}</div>
                    <div className='note-content'>
                        <div>{e.note_content}</div>
                        <img src='' alt='' />
                    </div>
                    <p className='category-note-page'>{e.note_category}</p>
                    <CommentPost note_id={e.note_id} />
                </div >
            ))}

        </>
    )
}

export default PublicNote
