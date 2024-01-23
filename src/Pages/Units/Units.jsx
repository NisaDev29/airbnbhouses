import React from 'react'
import Footer from '../../Components/Footer/Footer';
import ListUnit from '../../Components/ListUnit/ListUnit';
import Navbar from '../../Components/Navbar/Navbar';
import './units.css'
import {UnitData} from '../../Assets/Data';

const Units = () => {
  return (
    <div className="units">
      <Navbar/>
      <div className="unitContainer">
        {/* <div className="unitFilter">
          <h3 className='unitTitle'>FILTER</h3>
          <form>
            <div className='unitFilterInput'>
              <label htmlFor="type">Room Category</label>
              <select className='unitTypeSelect' id="type" name="type">
                <option defaultValue={true} value="double">Double Room</option>
                <option value="single">Single Room</option>
                <option value="apartament">Apartment 2+1</option>
                <option value="studio">Studio</option>
              </select>
            </div>
            <div className='unitFilterInput'>
              <label htmlFor="guest">Guests</label>
              <select className='unitTypeSelect' id="type" name="type">
                <option  value="1" >1</option>
                <option defaultValue={true} value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="unitFilterInput">
              <label htmlFor="price">Price Range</label>
              <div className='unitPrice'>
              <input type="number" min={20} placeholder='MIN' /><input type="number" max={150} placeholder='MAX' />
              </div>
            </div>
            <button className='unitButton'>FILTER</button>
          </form>
        </div> */}
        <div className="unitWrapper">
          <h3 className='unitTitle'>ALL UNITS</h3>
          <div className='unitList'>
            {UnitData.map((unit)=>{
              return <ListUnit
              id={unit.id}
              img={unit.img}
              unitName={unit.unitName}
              guests={unit.guests}
              beds={unit.beds}
              type={unit.type}
              desc={unit.desc}
              price={unit.price}
              stars={unit.stars}
              />
            })}
          </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Units