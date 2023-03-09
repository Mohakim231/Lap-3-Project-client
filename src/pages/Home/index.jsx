import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Home = () => {
  return (
    <>
      <div className='home-nav-box'>
        <Link
          to='/notes'
          className='nav-box-link'
        >
          <div
            className='nav-box'
            aria-label="notes box link"
          >
            Notes
          </div>
        </Link>
        <Link
          to='/'
          className='nav-box-link'
        >
          <div
            className='nav-box'
            aria-label='public notes box link'
          >
            Public Notes
          </div>
        </Link>
        <Link
          to='/'
          className='nav-box-link'
        >
          <div
            className='nav-box'
            aria-label='send notes box link'
          >
            Send Notes
          </div>
        </Link>
        <Link
          to='/'
          className='nav-box-link'
        >
          <div
            className='nav-box'
            aria-label='forum box link'
          >
            Forum
          </div>
        </Link>
      </div>
      
    </>
  )
}

export default Home