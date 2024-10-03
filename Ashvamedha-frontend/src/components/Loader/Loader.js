import React from 'react'
import './Loader.scss'
import {InfinitySpin} from 'react-loader-spinner';

function Loader() {
  return (
    <div className='Loaderbox'>

        <InfinitySpin
            visible={true}
            width="200"
            color="orangered"
            ariaLabel="infinity-spin-loading"
      />
    </div>
  )
}

export default Loader
