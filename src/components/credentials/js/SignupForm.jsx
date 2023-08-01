import React, { useState, useEffect, useMemo } from 'react'
import '../css/Forms.css'
import FullLogo from '../../atoms/js/FullLogo.jsx'
import Input from '../../atoms/js/Input.jsx'
import { signup } from '../metadata'

const SignupForm = (props) => {
    const { setRenderForm } = props
    const [details, setDetails] = useState({})
    const [buttonStatus, setButtonStatus] = useState(true)

    const goTo = () => {
        setDetails({})
        setButtonStatus(true)
        setRenderForm('SignIn')
    }


    return (
        <div className='SignupForm-parent-container'>
            <FullLogo />
            <div className='signup-form-inner-container'>
                <p className='inner-heading-text'>Welcome to C Stream</p>
                <p className='inner-heading-sub-text'>Hi, Wer'e happy to see you here !</p>
                <section className='signup-form-section'>
                    <Input
                        meta={signup}
                        details={details}
                        setDetails={setDetails}
                        setButtonStatus={setButtonStatus}
                    />
                </section>
                <button className={buttonStatus ? 'signup-button' : 'disabled-signup-button'} disabled={!buttonStatus} >Sign up</button>
                <p className='signup-bottom-text'>Already have a account ? <span className='signup-bottom-text-span' onClick={goTo} >SignIn</span></p>
            </div>
        </div>
    )
}

export default React.memo(SignupForm)