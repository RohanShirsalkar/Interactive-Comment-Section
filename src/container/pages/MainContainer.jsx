import React, { useEffect } from 'react'
import { getPost } from '../../redux/actions/commentAction'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import CommentsSection from '../components/CommentsSection'
import Post from '../components/Post'
import Spinner from '../components/Spinner'


export default function MainContainer() {
  const dispatch = useDispatch()
  const fetchedpost = useSelector(state => state.post.data)

  useEffect(() => {
    dispatch(getPost())
  }, [])

  console.log(fetchedpost && fetchedpost[0])

  const postArray = fetchedpost && fetchedpost.map(item => {
    return <Post owner={item.owner} tags={item.tags} postImage={item.image} />
  })


  return (

    <>
      {!fetchedpost ? <Spinner /> :
        <div className="mainContainer container d-flex mt-4">

          <div className="imageSectionContainer w-50" >
            {postArray}
          </div>

          <div className="commentSectionContainer w-50">
            <CommentsSection />
          </div>
        </div>
      }
    </>
  )
}
