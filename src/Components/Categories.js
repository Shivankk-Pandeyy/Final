import React from 'react'
import './style.css'
import chairs from './livingroom.avif'
import tables from './kitchen.jpg'
import sofas from './bedroom.jpg'
import beds from './lawnn.jpg'
import cabinets from './dinning.avif'
import storage from './kids.avif'
import service from './service.png'
import pack from './pack.png'
import warranty from './warranty.png'
const Categories = () => {
  return (
    <div className='cat'>
    <div className='list1'>
    <div className='i1'>
    <h3>154 Products</h3>
    <img src={chairs} alt='CHAIRS'></img>
    <h2>Living Room</h2>
    </div>
    <div className='i1'>
    
    <h3>154 Products</h3>
    <img src={tables} alt='TABLES'></img>
    <h2>Kitchen</h2>
    </div>
    <div className='i1'>
    
    <h3>154 Products</h3>
    <img src={sofas} alt='SOFAS'></img>
    <h2>Bedroom</h2>
    </div>
    </div>
    <div className='list2'>
    <div className='i1'>
    
    <h3>154 Products</h3>
    <img src={beds} alt='BEDS'></img>
    <h2>Garden and Lawn</h2>
    </div>
    <div className='i1'>
    <h3>154 Products</h3>
    <img src={cabinets} alt='CABINETS'></img>
    <h2>Hall and Dinning</h2>
    </div>
    <div className='i1'>
    
    <h3>154 Products</h3>
    <img src={storage} alt='STORAGE'></img>
    <h2>Kids Room</h2>
    </div>
    </div>
    <div className='cat2'>
    <div className='cat22'>
    <img src={pack} alt='PACKAGE'></img>
    <h2>100 Days Return</h2>
    </div>
    <div className='cat22'>
    <img src={warranty} alt='LIFETIME WARRANTY'></img>
    <h2>Lifetime Warranty</h2>
    </div>
    <div className='cat22'>
    <img src={service} alt='CUSTOMER SERVICE'></img>
    <h2>Customer Service</h2>
    </div>
    </div>
    </div>
  )
}

export default Categories
