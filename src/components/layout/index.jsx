import React, { useEffect, useState } from 'react'
import './css/Layout.css'
import { Outlet, NavLink } from 'react-router-dom'
import { footerMenu } from './metaData.js'

const Layout = () => {
    const [showFiledIcons, setShowFilledIcons] = useState([])
    const [updateLivePath, setUpdateLivePath] = useState(!sessionStorage.getItem('path') ? '/home' : '')

    const getPathFromSession = sessionStorage.getItem('path')

    const access = 'user'

    useEffect(() => {
        if (sessionStorage.getItem('path')?.length === 0 || !sessionStorage.getItem('path')) {
            sessionStorage.setItem("path", '/home')
        }
    }, [getPathFromSession])

    const mouseEnteronIcons = (name) => {
        setShowFilledIcons([name])
    }

    const mouseLeaveOnIcons = () => {
        setShowFilledIcons([])
    }

    const navigateViaClick = (route) => {
        sessionStorage.setItem("path", route)
        setUpdateLivePath(route)
    }

    return (
        <div className='layout-parent-container'>
            <section className='outlet-section'>
                <Outlet />
            </section>
            <section className='floating-footer-parent-container'>
                {footerMenu && footerMenu?.map((item, index) => {
                    return (
                        <React.Fragment>
                            {(item?.access?.toLocaleLowerCase() === access?.toLocaleLowerCase() || access?.toLocaleLowerCase() === 'admin') && <NavLink key={index} to={item?.route} className='footer-icon-parent-container' activeclassName='active' onClick={() => navigateViaClick(item?.route)}>
                                <div className='footer-icon-container' onMouseEnter={() => mouseEnteronIcons(item?.label)} onMouseLeave={mouseLeaveOnIcons}>
                                    {(getPathFromSession?.toLocaleLowerCase() !== item?.route && updateLivePath !== item?.route && (!showFiledIcons?.includes(item?.label))) && <item.iconOutline />}
                                    {(getPathFromSession?.toLocaleLowerCase() === item?.route || updateLivePath === item?.route || (showFiledIcons?.includes(item?.label))) && <item.iconFilled />}
                                </div>
                                {(getPathFromSession?.toLocaleLowerCase() === item?.route || updateLivePath === item?.route) && <p className='footer-icon-name'>{item?.label}</p>}
                            </NavLink>}
                        </React.Fragment>
                    )
                })}
            </section>
        </div>
    )
}

export default React.memo(Layout)