import React from 'react'
import Spinner from "./Spinner"
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useEffect } from 'react'
import CommentCard from './CommentCard'
import { getComments } from '../../redux/actions/commentAction'
import { postComment } from '../../redux/actions/commentAction'
import { useState } from 'react'

export default function CommentsSection() {
    const [text, setText] = useState("")

    const dispatch = useDispatch()
    const fetchedComments = useSelector(state => state.comments)

    useEffect(() => {
        dispatch(getComments())
    }, [fetchedComments])

    const commentsArray = fetchedComments.data && fetchedComments.data.map((item) => {
        return <CommentCard key={item.id} date={item.publishDate} owner={item.owner} message={item.message} commentId={item.id} />
    })

    const handleSubmit = () => {
        dispatch(postComment(text))
        setText("")
    }

    return (
        <div className="commentSection container position-relative px-4">
            <div className="comments-list overflow-auto position-relative" style={{ height: "80vh" }}>
                {commentsArray ? commentsArray : <Spinner/>}
            </div>

            <div className="commentSection-addComment d-flex  mt-2 py-3 px-2" style={{ backgroundColor: "white" }}>

                <textarea value={text} onInput={event => setText(event.target.value)} name="newComment" className='p-2 me-2' placeholder='Add comment...' style={{ width: "100%", borderRadius: "5px" }}></textarea>

                <div >
                    <button type="button" onClick={handleSubmit} className="btn btn-primary">SEND</button>
                </div>
            </div>
        </div>
    )
}
