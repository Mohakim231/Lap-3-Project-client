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
          >
            Forum
          </div>
        </Link>
      </div>
      
    </>
  )
}

export default Home