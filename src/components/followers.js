import React, { useEffect, useState } from 'react'
import axios from 'axios'
import image from '../assets/default.png'
import { useParams } from 'react-router-dom'

function getImage (account) {
  return account.attributes.image.url === 'default.png'
    ? image
    : account.attributes.image.standard.url
}

function Followers () {
  const { id } = useParams()

  const API_URL = process.env.REACT_APP_ALL_FOLLOWERS + `/${id}`

  const [followers, setFollowers] = useState([])

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setFollowers(response.data.data)
      })
      .catch((error) => console.log(error.message))
  }, [API_URL])

  return (
    <div className='text-center'>
      <h1 className='mt-5'>All Followers</h1>
      <br />
      {followers.length === 0
        ? (
          <h4>Zero Followers</h4>
          )
        : (
            followers.map((account) => {
              return (
                <div key={account.id} className='item'>
                  <img
                    src={getImage(account)}
                    alt='profile_pic'
                    className='my-image '
                  />
                  <h4>{account.attributes.name}</h4>
                  <h4>{account.attributes.email}</h4>
                </div>
              )
            })
          )}
    </div>
  )
}

export default Followers
