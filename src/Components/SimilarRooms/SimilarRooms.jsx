import React from 'react'
import './similarrooms.css'
const SimilarRooms = () => {
  return (
    <div id='similarRoom'>
        <h4 className='srTitle'>OTHER SIMILAR ROOMS</h4>
        <div className='srCards'>
            <div className="srCard">
                <img src="https://i.pinimg.com/564x/a2/2e/6b/a22e6b072ab387bed0d9a65bd92d4ce3.jpg" alt="" />
                <h3 className="srCardTitle">STUDIO</h3>
                <h4 className='srPrice'>$50</h4>
            </div>
            <div className="srCard">
                <img src="https://i.pinimg.com/564x/a2/2e/6b/a22e6b072ab387bed0d9a65bd92d4ce3.jpg" alt="" />
                <h3 className="srCardTitle">APARTAMENT 1+1</h3>
                <h4 className='srPrice'>$50</h4>
            </div>
        </div>
    </div>
  )
}

export default SimilarRooms