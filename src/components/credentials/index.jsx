import React, { useEffect, useState } from 'react'
import './css/Credentials.css'
import { randomPosterGenerator, ratingValueGenerator } from '../../utils/CommonLogic'
import { credentialsPosterCollections, icons } from '../../Constant'
import SignupForm from './js/SignupForm.jsx'
import SigninForm from './js/SigninForm.jsx'

const Credentials = () => {

    const [randomPoster, setRandomPoster] = useState({})
    const [detailsCard, setDetailsCard] = useState(false)
    const [renderForm, setRenderForm] = useState('SignIn')

    useEffect(() => {
        setTimeout(() => {
            setRandomPoster(randomPosterGenerator(credentialsPosterCollections))
        }, 2000);
    }, [randomPoster])

    const detailsCardEnable = () => setDetailsCard(true)
    const detailsCardDisable = () => setDetailsCard(false)

    return (
        <div className='credentials-parent-container'>
            <section className='credentials-section-one'>
                {renderForm.toLocaleLowerCase() === 'signup' && <SignupForm setRenderForm={setRenderForm} />}
                {renderForm.toLocaleLowerCase() === 'signin' && <SigninForm setRenderForm={setRenderForm} />}
            </section>
            <section className='credentials-section-two' onMouseEnter={detailsCardEnable} onMouseLeave={detailsCardDisable}>
                <img src={randomPoster?.img} className='credentials-random-poster' alt='' />
                {detailsCard && <div className='credentials-random-poster-bottom-card'>
                    <p className='credentials-random-poster-bottom-card-title'>{randomPoster?.title}</p>
                    <div className='credentials-random-poster-bottom-card-ratting'>
                        {ratingValueGenerator(randomPoster?.ratting).map((rating, key) => {
                            if (rating !== 0) {
                                return <icons.filledStar style={{ color: '#ffc107' }} />
                            } else if (rating === 0) {
                                return <icons.starOutline style={{ color: '#ffc107' }} />
                            }
                        })}
                    </div>
                    {randomPoster?.actors && <p className='credentials-random-poster-bottom-card-actors-list'>Actors : {randomPoster?.actors?.join(',')}</p>}
                </div>}
            </section>
        </div>
    )
}

export default Credentials