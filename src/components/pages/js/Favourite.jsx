import React from 'react'
import '../css/Favourite.css'
import { favMovieList } from '../metadata'

const Favourite = () => {
  return (
    <div className='fav-parent-container'>
      <p className='fav-title'>Favourite Items</p>

      <div className='fav-list-parent-container'>
        {favMovieList && favMovieList?.map((fav, index) => {
          return (
            <div className='fav-list-container' key={index}>
              <img className='fav-poster-img' src={fav?.img} />
              <p className='fav-movie-name'>Name : {fav?.name}</p>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default React.memo(Favourite)