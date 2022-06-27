import React from 'react'
import { BsHeart } from 'react-icons/bs'
import { GoComment } from 'react-icons/go'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import { MdOutlineSaveAlt } from 'react-icons/md'
import Comments_List_Item from './Comments_List_Item'

export default function Main_Container() {
  return (
    <div className="mainContainer container d-flex mt-4">
      <div className="imageSection w-50 p-2">

        <div className="imageSection-header d-flex p-2 mb-2">
          <img className='imageSection-header-logo me-3' src="https://www.logodesignlove.com/wp-content/uploads/2022/01/logo-wave-symbol-01.jpg" alt="ERROR" />
          <div>
            <h5 className='m-0'>Rohan Shirsalkar</h5>
            <p className='m-0'>Location</p>
          </div>
        </div>

        <img className='w-100 mb-2' src="https://www.itl.cat/pngfile/big/79-799940_trees-dense-autumn-path-dark-world-forest-message.jpg" alt="" />

        <div className="imageSection-footer d-flex justify-content-between p-2">

          <div className="imageSection-footer d-flex justify-content-between" style={{ width: "8rem" }}>
            <BsHeart style={{ fontSize: "2rem" }} />
            <IoPaperPlaneOutline style={{ fontSize: "2rem" }} />
            <GoComment style={{ fontSize: "2rem" }} />
          </div>

          <MdOutlineSaveAlt style={{ fontSize: "2rem" }} />

        </div>
      </div>


      <div className="commentSection container position-relative w-50 px-4">
        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum vero tempora sequi nihil, sunt pariatur illum nam rem quos atque itaque veritatis accusantium, voluptates possimus voluptate hic accusamus omnis labore consequuntur nulla! */}
        <div className="comments-list overflow-auto" style={{ maxHeight: "90%" }}>
          <Comments_List_Item />
          <Comments_List_Item />
          <Comments_List_Item />
          <Comments_List_Item />
          <Comments_List_Item />
          <Comments_List_Item />
          <Comments_List_Item />
          <Comments_List_Item />
        </div>

        <div className="commentSection-addComment d-flex  py-3 px-2" style={{ backgroundColor: "white" }}>
          {/* <img src="" alt="" /> */}
          <textarea name="newComment" className='p-2 me-2' placeholder='Add comment...' style={{ width: "32rem", borderRadius: "5px" }}></textarea>
          <div >
            <button type="button" class="btn btn-primary">SEND</button>
          </div>
        </div>
      </div>
    </div>
  )
}
