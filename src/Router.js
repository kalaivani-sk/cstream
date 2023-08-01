import React from 'react'
import Credentials from './components/credentials/index.jsx'
import Layout from './components/layout/index.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/js/Home.jsx'
import Group from './components/pages/js/Group.jsx'
import Favourite from './components/pages/js/Favourite.jsx'
import Profile from './components/pages/js/Profile.jsx'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Credentials/>}/>
                <Route path='/' element={<Layout />}>
                    <Route path='/home' element={<Home />} />
                    <Route path='/group' element={<Group />} />
                    <Route path='/favourite' element={<Favourite />} />
                    <Route path='/profile' element={<Profile />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default React.memo(Router)