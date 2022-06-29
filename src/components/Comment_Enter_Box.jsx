import React from 'react'

export default function Comment_Enter_Box(props) {
  return (
    <div>
      <div className="commentSection-addComment d-flex  mt-2 py-3 px-2" style={{ backgroundColor: "white" }}>
          <div>
            {/* <img style={{width:"2rem", borderRadius:"50%"}} src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="" /> */}
          </div>
          <textarea name="newComment" className='p-2 me-2' placeholder='Add comment...' onInput={event => props.setText(event.target.value  )} value={props.text} style={{ width: "100%", borderRadius: "5px" }}></textarea>
          <div >
            <button type="button" onClick={props.handleSubmitFn} className="btn btn-primary">SEND</button>
          </div>
        </div>
    </div>
  )
}
