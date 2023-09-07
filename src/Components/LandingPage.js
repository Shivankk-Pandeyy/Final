import React from 'react'
import './App.css'
import './style.css'
import chairs from './chairs.avif'
import tables from './tables.avif'
import sofas from './sofas.avif'
import beds from './beds.avif'
import cabinets from './cabinets.avif'
import storage from './storage.avif'
import hpic from './hpic.avif'
import user from './user.png'
import chairs1 from './livingroom.avif'
import tables1 from './kitchen.jpg'
import sofas1 from './bedroom.jpg'
import beds1 from './lawnn.jpg'
import cabinets1 from './dinning.avif'
import storage1 from './kids.avif'
import service from './service.png'
import pack from './pack.png'
import warranty from './warranty.png'
import l2 from './landingpagepic.avif';
import mc from './massagechair.avif'
import rc1 from './rc1.avif'
import rc2 from './rc2.avif'
import cu from './callus.png'
import mu from './mailus.png'
import lu from './locus.png'
const LandingPage = () => {
  return (
    <>
    <div className='landing'>
    <div className='l1'>
    <img src={l2} alt='LANDING PAGE PIC'></img>
    </div>
    <div className='l2'>
    <h3>Our Wooden Concept:</h3>
    <h2>Sustainable</h2>
    <h2>Furniture</h2>
    <p>Sit In Style</p>
    <p>Chose Our Chairs With</p>
    <p>Smile</p>
    <button>Discover More</button>

    </div>
    </div>
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
    <p>00H:59M:57S <div></div></p>
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
    <div className='cat'>
    <div className='list1'>
    <div className='i1'>
    <h3>154 Products</h3>
    <img src={chairs1} alt='CHAIRS'></img>
    <h2>Living Room</h2>
    </div>
    <div className='i1'>
    
    <h3>154 Products</h3>
    <img src={tables1} alt='TABLES'></img>
    <h2>Kitchen</h2>
    </div>
    <div className='i1'>
    
    <h3>154 Products</h3>
    <img src={sofas1} alt='SOFAS'></img>
    <h2>Bedroom</h2>
    </div>
    </div>
    <div className='list2'>
    <div className='i1'>
    
    <h3>154 Products</h3>
    <img src={beds1} alt='BEDS'></img>
    <h2>Garden and Lawn</h2>
    </div>
    <div className='i1'>
    <h3>154 Products</h3>
    <img src={cabinets1} alt='CABINETS'></img>
    <h2>Hall and Dinning</h2>
    </div>
    <div className='i1'>
    
    <h3>154 Products</h3>
    <img src={storage1} alt='STORAGE'></img>
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
    </>
  )
}
export default LandingPage
