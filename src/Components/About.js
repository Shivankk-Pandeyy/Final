import React from 'react'
import './style.css'
import chairs from './chairs.avif'
import tables from './tables.avif'
import sofas from './sofas.avif'
import beds from './beds.avif'
import cabinets from './cabinets.avif'
import storage from './storage.avif'
import hpic from './hpic.avif'
import user from './user.png'
const About = () => {
return (
    <div className='about'>
    <div className='list1'>
    <div className='i1'>
    <h2>Chairs</h2>
    <h3>154 Products</h3>
    <img src={chairs} alt='CHAIRS'></img>
    <button>View</button>
    </div>
    <div className='i1'>
    <h2>Tables</h2>
    <h3>154 Products</h3>
    <img src={tables} alt='TABLES'></img>
    <button>View</button>
    </div>
    <div className='i1'>
    <h2>Sofa</h2>
    <h3>154 Products</h3>
    <img src={sofas} alt='SOFAS'></img>
    <button>View</button>
    </div>
    </div>
    <div className='list2'>
    <div className='i1'>
    <h2>Beds</h2>
    <h3>154 Products</h3>
    <img src={beds} alt='BEDS'></img>
    <button>View</button>
    </div>
    <div className='i1'>
    <h2>Cabinets</h2>
    <h3>154 Products</h3>
    <img src={cabinets} alt='CABINETS'></img>
    <button>View</button>
    </div>
    <div className='i1'>
    <h2>Storage</h2>
    <h3>154 Products</h3>
    <img src={storage} alt='STORAGE'></img>
    <button>View</button>
    </div>
    </div>
    <div className='highlights'>
    <div className='hpic'><img src={hpic} alt='HIGHLIGHT PIC'></img></div>
    <div className='hpicinfo'>
    <h2>Monthly highlights</h2>
    <p>Product of The Month Sale Ends in </p>
    <p>00H:59M:57S</p>
    <button>Shop Now</button>
    </div>
    </div>
    <h1 className='h1'>Happy Clients</h1>
    <div className='client1'>
    <div className='c1'>
    <div className='c1i'><img src={user} alt='USER'></img></div>
    <div className='c1info'><h2>Username</h2> <p>Random................</p></div>
    </div>
    <div className='c2'>
    <div className='c1i'><img src={user} alt='USER'></img></div>
    <div className='c1info'><h2>Username</h2> <p>Random................</p></div>
    </div>
    <div className='c3'>
    <div className='c1i'><img src={user} alt='USER'></img></div>
    <div className='c1info'><h2>Username</h2> <p>Random................</p></div>
    </div>
    <div className='c1'>
    <div className='c1i'><img src={user} alt='USER'></img></div>
    <div className='c1info'><h2>Username</h2> <p>Random................</p></div>
    </div>
    </div>
    <div className='client1'>
    <div className='c2'>
    <div className='c1i'><img src={user} alt='USER'></img></div>
    <div className='c1info'><h2>Username</h2> <p>Random................</p></div>
    </div>
    <div className='c3'>
    <div className='c1i'><img src={user} alt='USER'></img></div>
    <div className='c1info'><h2>Username</h2> <p>Random................</p></div>
    </div>
    <div className='c1'>
    <div className='c1i'><img src={user} alt='USER'></img></div>
    <div className='c1info'><h2>Username</h2> <p>Random................</p></div>
    </div>
    <div className='c2'>
    <div className='c1i'><img src={user} alt='USER'></img></div>
    <div className='c1info'><h2>Username</h2> <p>Random................</p></div>
    </div>
    </div>
    </div>
)
}

export default About
