import React from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { deleteComments } from '../../redux/actions/commentAction'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'



export default function CommentCard (props) {
    const dispatch = useDispatch()

    const handleDeleteFn = () => {
        dispatch(deleteComments(props.commentId))
    }

    return (
        <div className='commentSection-listItem card mb-3'>
            <div className="card-body">
                <div>
                    <div className="listItem-nameSection d-flex justify-content-between mb-2">
                        <div>
                            <span className='me-2'><b>{props.owner.firstName} {props.owner.lastName}</b></span>
                            <span className='text-secondary'>{props.date.slice(0, 10)}</span>    
                        </div>

                        <div>
                            <a className='text-danger text-decoration-none me-3' onClick={handleDeleteFn} href='#'><MdDeleteForever /> <b>Delete</b></a>
                        </div>
                    </div>

                    <div className="listItem-comment">
                        <p>{props.message}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
