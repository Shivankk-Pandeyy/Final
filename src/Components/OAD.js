import React from 'react'
import "./style.css"
import mc from './massagechair.avif'
import rc1 from './rc1.avif'
import rc2 from './rc2.avif'
import cu from './callus.png'
import mu from './mailus.png'
import lu from './locus.png'
const OAD = () => {
  return (
    <div className='oad'>
    <div className='oadinfo'>
    <div className='oadinfoimage'>
    <img src={mc} alt='CHAIR'></img>
    </div>
    <div className='oadinfo1'>
    <h2>Experience Quality</h2>
    <h2>Like Never Before</h2>
    <h3>First Time In Chhattisgarh</h3>
    <button>Shop Now</button>
    <div className='rc'>
    <img src={rc1} alt='CHAIR' ></img>
    <img src={rc2} alt='CHAIR' ></img>
    </div>
    </div>
    </div>
    <div className='oad1'>
    <div className='oad2'>
    <img src={cu} alt='CALL'></img>
    <h2>Call Us</h2>
    </div>
    <div className='oad2'>
    <img src={mu} alt='CALL'></img>
    <h2>Call Us</h2>
    </div>
    <div className='oad2'>
    <img src={lu} alt='CALL'></img>
    <h2>Call Us</h2>
    </div>
    </div>
    </div>
  )
}

export default OAD
