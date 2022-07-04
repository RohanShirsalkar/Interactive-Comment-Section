import React, { useEffect } from 'react'
import { BsHeart } from 'react-icons/bs'
import { GoComment } from 'react-icons/go'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import { MdOutlineSaveAlt } from 'react-icons/md'
import { getComments, getPost } from '../../redux/actions/commentAction'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import CommentsSection from '../components/CommentsSection'


export default function MainContainer () {
  const dispatch = useDispatch()
  const fetchedpost = useSelector(state => state)

  useEffect(() => {
    dispatch(getPost())
  },[])

  console.log(fetchedpost.post.data)
  

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

      <CommentsSection />
    </div>
  )
}
