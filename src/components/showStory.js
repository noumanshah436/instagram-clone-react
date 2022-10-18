import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ShowStory () {
  const { id } = useParams()
  const [story, setStory] = useState([])
  const [load, setLoad] = useState(true)

  // const API_URL = `http://localhost:3000/api/v1/stories/${id}`;
  // const API_URL = `https://instagram-clone-pk.herokuapp.com/api/v1/stories/${id}`
  const API_URL = process.env.REACT_APP_ALL_STORIES + `/${id}`

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setStory(response.data.data)
        setLoad(false)
      })
      .catch((error) => console.log(error))
  }, [API_URL])

  return (
    <>
      {load || (
        <div className='card border-0 mt-3 '>
          <div className='card-body   '>
            <div className=' row mt-2 align-items-center justify-content-start '>
              <img
                src={story.attributes.account.image.thumbnail.url}
                alt='profile_pic'
                className='mr-3 profile_pic rounded-circle'
              />
              <div>{story.attributes.account.name}</div>
            </div>
          </div>
          <img
            src={story.attributes.image.standard.url}
            alt=''
            className='my-5 w-100  '
          />
        </div>
      )}
    </>
  )
}

export default ShowStory

// {
// id: 20,
// image: {
// url: "https://res-1.cloudinary.com/dl40wvlge/image/upload/v1664952673/q4hfmaxjihdt5yvf8k2n.png",
// standard: {
// url: "https://res-1.cloudinary.com/dl40wvlge/image/upload/c_fill,g_center,h_200,w_300/v1664952673/q4hfmaxjihdt5yvf8k2n.png"
// },
// thumbnail: {
// url: "https://res-1.cloudinary.com/dl40wvlge/image/upload/c_fit,h_60,w_60/v1664952673/q4hfmaxjihdt5yvf8k2n.png"
// }
// },
// account_id: 1,
// created_at: "2022-10-05T06:51:09.664Z",
// updated_at: "2022-10-05T06:51:09.664Z",
// account: {
// id: 1,
// email: "noumanrehman042@gmail.com",
// created_at: "2022-09-12T11:21:27.502Z",
// updated_at: "2022-09-26T14:44:32.110Z",
// name: "Nouman",
// website: "localhost",
// bio: "I am Nouman",
// image: {
// url: "https://res-1.cloudinary.com/dl40wvlge/image/upload/v1663609782/euwbqa8m7xzqauo4nncu.png",
// standard: {
// url: "https://res-1.cloudinary.com/dl40wvlge/image/upload/c_fill,g_center,h_200,w_300/v1663609782/euwbqa8m7xzqauo4nncu.png"
// },
// thumbnail: {
// url: "https://res-1.cloudinary.com/dl40wvlge/image/upload/c_fit,h_60,w_60/v1663609782/euwbqa8m7xzqauo4nncu.png"
// }
// },
// active: true
// }
// }
