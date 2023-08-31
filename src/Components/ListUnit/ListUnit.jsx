import React from 'react'
import './listunit.css'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

const ListRoom = () => {
  return (
    <div className="listRoom">
       <img src="https://i.pinimg.com/736x/2a/72/01/2a7201c87a52b7017b2850f3c70fea1b.jpg" alt="Room" />
       <div className="lrText">
        <p>Olimpic Park Studio</p>
        <span className='lrOther'>Studio | 2 beds | 2 guests</span>
        <span className='lrOther'>Studio with inside bathroom and street view.</span>
        <div className='lrRating'>
          <span className='lrRate'><StarRateRoundedIcon fontSize='small'/> 4/5  </span>
          <span className='lrPrice'>$40</span>
        </div>
       </div>
    </div>
  )
}

export default ListRoom
