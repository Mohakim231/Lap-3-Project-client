import axios from '../../api/axios';
import React, { useState, useEffect } from 'react'

const CommentPost = (props) => {

    const note_id = props.note_id
<<<<<<< HEAD
    const [comments, setComments] = useState([])
=======
    const close = props.handleCloseCommentSection
    const [comments, setComments] = useState([])
    const [commentText, setCommentText] = useState('');
>>>>>>> e38320edbea50b17b9b89b4a7f6eda917065da16

    useEffect(() => {

        const fetchItem = async () => {
            console.log(note_id)
            const response = await axios.get(`http://localhost:3000/forum/comment/${note_id}`);

            setComments(response.data)
        }


        fetchItem()
    }, []);
<<<<<<< HEAD

=======
>>>>>>> e38320edbea50b17b9b89b4a7f6eda917065da16



    return (


        <>

            <div className='post-comment'>
<<<<<<< HEAD
                {comments.map((e, i) => (<p key={i}> user id: {e.user_id}  content: {e.comment_content} </p>))}
=======
                <p className='exit' onClick={close}>x</p>
                <h1 className='comments'>Comments</h1>
                {comments.map((e, i) => (<div key={i} className='comment-content-wrapper'><p className='username-comment'>{e.user_id}</p>
                <p className='comment-content'>{e.comment_content}</p></div>))}
>>>>>>> e38320edbea50b17b9b89b4a7f6eda917065da16
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