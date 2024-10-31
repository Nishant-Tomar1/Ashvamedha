import React from 'react'
import './Loader.scss'
import logomashaal from '../../assests/ashvamedhaLogo.png'
import logomashaal2 from '../../assests/ashvamedhaLogo copy.png'
import logomashaal3 from '../../assests/ashvamedhaLogo copy 2.png'
import logomashaal4 from '../../assests/ashvamedhaLogo copy 3.png'
function Loader() {
  return (
    <>
    <div className='Loaderbox'>
      {/* <div className='Loaderinside'> */}
        <div className="imagefader">
          <div><img alt='-' src={logomashaal4} className='loaderlogomashaal' /></div>
          <div><img alt='-' src={logomashaal3} className='loaderlogomashaal' /></div>
          <div><img alt='-' src={logomashaal2} className='loaderlogomashaal' /></div>
          <div><img alt='-' src={logomashaal} className='loaderlogomashaal' /></div>
        </div>
      {/* </div> */}
    </div>
    
    </>
  )
}

export default Loader
