import React, { useState, useEffect, useMemo } from 'react'
import '../css/Atoms.css'
import { icons } from '../../../Constant'
import { regex } from '../../../Constant'

const Input = (props) => {
    const { meta, setDetails, details, setButtonStatus = () => { } } = props
    const [eyeOpen, setEyeOpen] = useState({})
    const [error, setError] = useState({})
    const [count, setCount] = useState([])

    const properties = {
        input: {
            small: 'input-small',
            medium: 'input-medium',
            large: 'input-large'
        }
    }

    const eyeOpenChange = (name) => {
        eyeOpen?.[name] ? setEyeOpen({ ...eyeOpen, [name]: false }) : setEyeOpen({ ...eyeOpen, [name]: true })
    }

    const handleChange = (e, type, required, verify) => {

        if (required) {
            if ((type === 'text' || type === 'date') && e?.target?.name && e?.target?.value?.length <= 0) {
                setError({ ...error, [e?.target?.name]: true })
            } else if ((type === 'text' || type === 'date') && e?.target?.name && e?.target?.value?.length > 0) {
                setError({ ...error, [e?.target?.name]: false })
            } else if (type === 'email') {
                if (regex?.email?.test(details?.[e?.target?.name])) {
                    setError({ ...error, [e?.target?.name]: false })
                } else {
                    setError({ ...error, [e?.target?.name]: true })
                }
            } else if (type === 'password') {
                if (verify) {
                    if (details?.[verify?.name] && e.target.value === details?.[verify?.name]) {
                        setError({ ...error, [e?.target?.name]: false })
                    } else {
                        setError({ ...error, [e?.target?.name]: true })
                    }
                } else if (regex?.password?.test(details?.[e?.target?.name])) {
                    setError({ ...error, [e?.target?.name]: false })
                } else {
                    setError({ ...error, [e?.target?.name]: true })
                }
            }
        }
        setDetails({ ...details, [e?.target?.name]: e?.target?.value })
    }

    const totalRequired = meta && meta?.filter(item => {
        if (item?.required) {
            return item
        }
    })

    const checkNoTrue = useMemo(() => {
        if (Object.keys(error).length === totalRequired?.length) {
            console.log(1)
            for (const key in error) {
                if (error?.hasOwnProperty(key) && error[key] === true) {
                    return false; // If a true value is found, return false
                }
            }
            return true; // If no true value is found, return true
        } else {
            return false
        }

    }, [error])

    useEffect(() => {
        setButtonStatus(checkNoTrue)
    }, [checkNoTrue])

    return (
        <React.Fragment>
            {meta && meta?.map((item, key) => {
                return (
                    <div className='input-parent-container' key={key}>
                        <label className='input-label'>{item?.label}
                            {item?.required && <span className='input-label-required'>*</span>}
                        </label>
                        {(item?.type !== 'password') && <input
                            type={item?.type ?? 'text'}
                            name={item?.name}
                            className={`input-field ${properties?.input?.[item?.size]}`}
                            onChange={(e) => handleChange(e, item?.type, item?.required)}
                            placeholder={item?.placeholder ?? ''}
                        />}
                        {(item?.type === 'password') && <div className='password-input-parent-container'>
                            <input
                                type={item?.type === 'password' && !eyeOpen?.[item?.name] ? 'password' : 'text'}
                                name={item?.name}
                                className={`input-field password ${properties?.input?.[item?.size]}`}
                                onChange={(e) => handleChange(e, item?.type, item?.required, item?.verify)}
                                placeholder={item?.placeholder ?? ''}
                            />
                            <span className='password-eye-icon' onClick={() => eyeOpenChange(item?.name)}>
                                {!eyeOpen?.[item?.name] && <icons.closedEyeOutLine />}
                                {eyeOpen?.[item?.name] && <icons.openedEyeOutLine />}
                            </span>
                        </div>}
                        <div className='input-required-message'>
                            {(item?.required && error?.[item?.name] === true) && <p className='input-error-icon'> <icons.errorOutline /></p>}
                            {(item?.required && error?.[item?.name] === true) && <p className='input-required-message-text'>{item?.errorMsg ?? 'Required'}</p>}
                        </div>
                    </div>
                )
            })}
        </React.Fragment>
    )
}

export default React.memo(Input)