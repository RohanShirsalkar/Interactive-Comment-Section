import React from 'react'
import { GoReply } from 'react-icons/go'
import { MdDeleteForever } from 'react-icons/md'



export default function Comments_List_Item(props) {

    const handleDeleteFn = () => {
        const commentId = props.commentId
        const requsetOptions = {
            method: "DELETE",
            headers: { "app-id": "62bae606f5b94f1f28befff7"}
        }
        fetch(`https://dummyapi.io/data/v1/comment/${commentId}`,requsetOptions)
        .then(response => response.json())
        .then(json => console.log(json))
    }


    return (
        <div className='commentSection-listItem card mb-3'>
            <div className="card-body">
                {/* <div className="listItem-btngroup me-3">
                    <div className="btn-group-vertical btn-group-sm">
                        <a href="#" className="btn btn-outline-secondary">+</a>
                        <a href="#" className="btn btn-outline-secondary">2</a>
                        <a href="#" className="btn btn-outline-secondary">-</a>
                    </div>
                </div> */}
                <div>
                    <div className="listItem-nameSection d-flex justify-content-between mb-2">
                        <div>
                            <span className='me-2'><b>{props.name}</b></span>
                            <span>1 month ago</span>
                        </div>

                        <div>
                            <a className='text-danger text-decoration-none me-3' onClick={handleDeleteFn} href='#'><MdDeleteForever /> <b>Delete</b></a>
                            {/* <a className='text-primary text-decoration-none' href='#'><GoReply /> <b>Reply</b></a> */}
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
