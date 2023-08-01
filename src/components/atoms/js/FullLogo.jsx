import React from 'react'
import '../css/Atoms.css'

const FullLogo = () => {
  return (
    <div className='full-logo-parent-container'>
      <p className='full-logo-text-1'> C <span className='full-logo-text-2'>Stream</span></p>
      <div className='full-logo-end-circle'></div>
    </div>
  )
}

export default React.memo(FullLogo)