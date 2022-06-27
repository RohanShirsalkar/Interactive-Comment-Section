import React from 'react'
import { GoReply } from 'react-icons/go'


export default function Comments_List_Item() {
    return (
        <div className='commentSection-listItem card mb-3'>
            <div class="card-body d-flex">
                <div className="listItem-btngroup me-3">
                    <div class="btn-group-vertical btn-group-sm">
                        <a href="#" class="btn btn-outline-secondary">+</a>
                        <a href="#" class="btn btn-outline-secondary">2</a>
                        <a href="#" class="btn btn-outline-secondary">-</a>
                    </div>
                </div>
                <div>
                    <div className="listItem-nameSection d-flex justify-content-between mb-2">
                        <div>
                            <span className='me-2'><b>Rohan</b></span>
                            <span>1 month ago</span>
                        </div>

                        <a className='text-primary text-decoration-none' href='#'><GoReply /> <b>Reply</b></a>
        
                    </div>

                    <div className="listItem-comment">
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam accusantium ducimus eaque quam nemo. Rerum earum autem neque deserunt.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
