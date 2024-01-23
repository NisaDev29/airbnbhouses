import React from 'react'
import './listunit.css'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { Link } from 'react-router-dom';

const ListRoom = ({id, img, unitName, price, guests, beds, type, desc, stars}) => {
  return (
    <div className="listRoom">
       <img src={img} alt="Room" />
       <div className="lrText">
        <p className='lrTitle'><Link to={`/units/:${id}`}>{unitName}</Link></p>
        <span className='lrOther'>{type} | {beds} beds | {guests} guests</span>
        <span className='lrOther'>{desc}</span>
        <div className='lrRating'>
          <span className='lrRate'><StarRateRoundedIcon fontSize='small'/> {stars}/5  </span>
          <span className='lrPrice'>${price}</span>
        </div>
       </div>
    </div>
  )
}

export default ListRoom
