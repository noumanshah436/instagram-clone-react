import React, { useEffect, useState } from 'react'
import Story from './story'
import axios from 'axios'

// const API_URL = "http://localhost:3000/api/v1/stories";
const API_URL = process.env.REACT_APP_ALL_STORIES

function getAPIData () {
  return axios.get(API_URL).then((response) => response.data)
}

function Stories () {
  const [stories, setStories] = useState([])

  useEffect(() => {
    let mounted = true
    getAPIData().then((items) => {
      if (mounted) {
        setStories(items.data)
      }
    })
    return () => (mounted = false)
  }, [])

  console.log(stories)
  return (
    <div className='text-center'>
      <h1 className='mt-5'>All Stories</h1>
      {stories.map((story) => {
        return (
          <div key={story.id} className='my-5'>
            <Story story={story} />
          </div>
        )
      })}
    </div>
  )
}

export default Stories
