import React, { useState } from 'react'
import FullLogo from '../../atoms/js/FullLogo.jsx'
import Input from '../../atoms/js/Input.jsx'
import { signin } from '../metadata.js'
import {useNavigate} from 'react-router-dom'

const SigninForm = (props) => {
    const { setRenderForm } = props
    const [details, setDetails] = useState({})
    const [buttonStatus, setButtonStatus] = useState(true)

    const navigate=useNavigate()

    const goTo = () => {
        setDetails({})
        setButtonStatus(true)
        setRenderForm('SignUp')
    }

    const signIn=()=>{
        navigate('/home')
    }

    return (
        <div className='SigninForm-parent-container'>
            <FullLogo />
            <div className='signin-form-inner-container'>
                <p className='inner-heading-text'>Welcome back to C Stream</p>
                <p className='inner-heading-sub-text'>Please enter the valid details !</p>
                <section className='signup-form-section'>
                    <Input
                        meta={signin}
                        details={details}
                        setDetails={setDetails}
                        setButtonStatus={setButtonStatus}
                    />
                </section>
                <button className={buttonStatus ? 'signup-button' : 'disabled-signup-button'} disabled={!buttonStatus} onClick={signIn}>Sign in</button>
                <p className='signup-bottom-text'>Doesn't have a account ? <span className='signup-bottom-text-span' onClick={goTo}>SignUp</span></p>
            </div>
        </div>
    )
}

export default React.memo(SigninForm)