import axios from '../../api/axios';
import React, { useState, useEffect } from 'react'

const CommentPost = (props) => {

    const note_id = props.note_id
    const close = props.handleCloseCommentSection
    const [comments, setComments] = useState([])
    const [commentText, setCommentText] = useState('');
    const [username, setUsername] = useState("")

    useEffect(() => {

        const fetchItem = async () => {
            console.log(note_id)
            const response = await axios.get(`http://localhost:3000/forum/comment/${note_id}`);

            setComments(response.data)
        }


        fetchItem()
    }, []);



    const getUsername = async (user) => {

        console.log(" this is the " + user)
        const response_username = await axios.get(`http://localhost:3000/user/${user}`)
        setUsername(response_username.data.username)

    }


    return (


        <>

            <div className='post-comment'>
                <p className='exit' onClick={close}>x</p>
                <h1 className='comments'>Comments</h1>
                {comments.map((e, i) => (<div key={i} className='comment-content-wrapper'><p className='username-comment'>username: {getUsername(e.user_id)[0]} {username} </p>
                    <p className='comment-content'>{e.comment_content}</p></div>))}
            </div>
            {/* <div className='submit-comment'>
                <form onSubmit={handleSubmit}>
                    <textarea value={commentText} onChange={(e) => setCommentText(e.target.value)} />
                    <button type='submit'>Submit</button>
                </form>
            </div> */}
        </>
    )
}

export default CommentPost
