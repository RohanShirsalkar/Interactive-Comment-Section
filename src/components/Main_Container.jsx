import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsHeart } from 'react-icons/bs'
import { GoComment } from 'react-icons/go'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import { MdOutlineSaveAlt } from 'react-icons/md'
import Comments_List_Item from './Comments_List_Item'
import Comment_Enter_Box from './Comment_Enter_Box'
import Loading_Spinner from './Loading_Spinner'

export default function Main_Container() {

  const [isLoading, setIsLoading] = useState()
  const [data, setData] = useState() /// Set to Redux
  const [text, setText] = useState() /// Set to Redux
  const [count, setCount] = useState(0)

  console.log(count)

  const apiData = {
    getCommentsUrl: 'https://dummyapi.io/data/v1/user/62bbf6cc0c0f94161ff52de7/comment',
    postCommentUrl: "https://dummyapi.io/data/v1/comment/create",
    headers: { 'app-id': '62bae606f5b94f1f28befff7' },
  }

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      await axios({
        url: apiData.getCommentsUrl,
        method: "GET",
        headers: apiData.headers
      })
        .then(data => setData(data.data))
        .catch(error => console.log(error.response.data))
      setIsLoading(false)
    }
    getData()
  }, [count])

  const handleSubmitFn = () => {

    const commentData = {
      "message": text,
      "owner": "62bbf6cc0c0f94161ff52de7",
      "post": "62bbf6cc0c0f94161ff52de7"
    }

    axios({
      url: apiData.postCommentUrl,
      method: "POST",
      headers: apiData.headers,
      data: commentData
    })
      .then(response => console.log(response.data))
      .catch(error => console.log(error.response.data))
    setCount(count + 1)
  }

  const commentsArray = data && data.data.map((item) => {
    return <Comments_List_Item key={item.id} name={item.owner.firstName} message={item.message} commentId={item.id} />
  })


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
        {/* {commentsArray} */}
        <div className="comments-list overflow-auto position-relative" style={{ height: "80vh" }}>
          {isLoading ? <Loading_Spinner /> : commentsArray}
        </div>


        <Comment_Enter_Box handleSubmitFn={handleSubmitFn} setText={setText} text={text} />

      </div>
    </div>
  )
}
