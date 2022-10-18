import React from 'react'
import { Link } from 'react-router-dom'

function Story ({ story }) {
  console.log(story)
  const { account } = story.attributes
  return (
    <>
      <div className='row  justify-content-center'>
        <div className='col-md-8 col-lg-6'>
          <div className='card mb-3 '>
            <div className='card-body  '>
              <div className=' row mt-2 align-items-center justify-content-start '>
                <div className='col-2 col-md-2 '>
                  <img
                    src={account.image.thumbnail.url}
                    alt='profile_pic'
                    className='profile_pic rounded-circle'
                  />
                </div>
                <div className='col-6 col-md-6  '>
                  <div>{account.name}</div>
                </div>
                <div className='col-2 col-md-2 '>
                  <Link
                    className='btn btn-sm btn-primary'
                    to={`/story/${story.id}`}
                  >
                    Show
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Story
