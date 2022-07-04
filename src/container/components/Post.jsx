import React from 'react'
import { BsHeart } from 'react-icons/bs'
import { GoComment } from 'react-icons/go'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import { MdOutlineSaveAlt } from 'react-icons/md'


export default function Post({owner, tags, postImage}) {

  return (
    <div className="postContainer w-100">
        <div className="imageSection p-2">

          <div className="imageSection-header d-flex p-2 mb-2">
            <img className='imageSection-header-logo me-3' src={owner.picture} alt="ERROR" />
            <div>
              <h5 className='m-0'>{owner.firstName} {owner.lastName}</h5>
              <p className='m-0'>{tags}</p>
            </div>
          </div>

          <img className='w-100 mb-2' src={postImage} alt="Image" />

          <div className="imageSection-footer d-flex justify-content-between p-2">

            <div className="imageSection-footer d-flex justify-content-between" style={{ width: "8rem" }}>
              <BsHeart style={{ fontSize: "2rem" }} />
              <IoPaperPlaneOutline style={{ fontSize: "2rem" }} />
              <GoComment style={{ fontSize: "2rem" }} />
            </div>

            <MdOutlineSaveAlt style={{ fontSize: "2rem" }} />
          </div>
        </div>
      </div>
  )
}
