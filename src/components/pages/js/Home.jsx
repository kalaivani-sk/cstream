import React, { useEffect, useState } from 'react'
import '../css/Home.css'
import { homePageRandomPoster, cat, catList } from '../metadata'
import { randomPosterGenerator } from '../../../utils/CommonLogic'

const Home = () => {
  const [homeRandomPoster, setHomeRandomPoster] = useState({})

  setTimeout(() => {
    setHomeRandomPoster(randomPosterGenerator(homePageRandomPoster))
  }, 2000);

  console.log(randomPosterGenerator(homePageRandomPoster))


  return (
    <div className='home-parent-container'>
      <section className='home-first-section'>
        <img src={homeRandomPoster?.img} className='home-first-section-img' />
      </section>

      <React.Fragment>
        {cat && cat?.map((value, index) => {
          return (
            <section className='home-second-section' key={index}>
              <div className='home-movie-list-container'>
                <p className='home-movie-list-cat-title'>{value}</p>
                <div className='home-movie-list-cat-list-container'>
                  {catList && catList?.[value]?.map((image, key) => <img  src={image} key={key} className='home-movie-list-cat-list-img'/>)}
                </div>
              </div>
            </section>
          )
        })}
      </React.Fragment>
    </div>
  )
}

export default Home