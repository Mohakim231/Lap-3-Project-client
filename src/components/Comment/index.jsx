import axios from '../../api/axios';
import React, { useState, useEffect } from 'react'

const CommentPost = (props) => {

    const note_id = props.note_id
    const [comments, setComments] = useState([])

    useEffect(() => {

        const fetchItem = async () => {
            console.log(note_id)
            const response = await axios.get(`http://localhost:3000/forum/comment/${note_id}`);

            setComments(response.data)
        }


        fetchItem()
    }, []);




    return (


        <>

            <div className='post-comment'>
                {comments.map((e, i) => (<p key={i}> user id: {e.user_id}  content: {e.comment_content} </p>))}
            </div>
        </>
    )
}

export default CommentPost
