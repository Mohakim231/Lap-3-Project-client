import axios from '../../api/axios';
import React, { useState, useEffect } from 'react'

const CommentPost = (props) => {

    const note_id = props.note_id
    const close = props.handleCloseCommentSection
    const [comments, setComments] = useState([])
    const [commentText, setCommentText] = useState('');
    const [refresh, setRefresh] = useState(0)
    const [username, setUsername] = useState('')

    useEffect(() => {

        const fetchItem = async () => {
            console.log(note_id)
            const response = await axios.get(`http://localhost:3000/forum/comment/${note_id}`);

            setComments(response.data)
        }


        fetchItem()
    }, [refresh]);

    function handleCommintSubmit(e){
        e.preventDefault();
        if(commentText.length > 0){
          fetch('http://localhost:3000/forum/comment',{
            method: 'POST',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({ comment_content: commentText, user_id: 4, note_id: note_id})
          })
          .then((res) => res.json())
          .then((data) => {
            setRefresh(prevState => prevState + 1)
          })
    
        } else {
          window.alert('Comment cannot be empty')
        }
      }

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
                {comments.map((e, i) => (<div key={i} className='comment-content-wrapper'><p className='username-comment'>{getUsername(e.user_id)[0]}{username}</p>
                <p className='comment-content'>{e.comment_content}</p></div>))}
                <div className='submit-comment'>
                <form onSubmit={handleCommintSubmit}>
                    <textarea className='comment-textarea' placeholder={`Whats on your mind ${username}`} value={commentText} onChange={(e) => setCommentText(e.target.value)} />
                    <button type='submit'>Submit</button>
                </form>
              </div>
            </div>
            
        </>
    )
}

export default CommentPost