import React from 'react'
import { NavLink } from 'react-router-dom'
import ProfileNav from '../components/ProfileNav/ProfileNav'
import stars from '../assets/star.png'
import User1 from '../assets/profileuser2.png'
import location1 from '../assets/collectorprofile.png'
import {HiLocationMarker} from 'react-icons/hi'
import MapImg from '../assets/map.svg'
import Line from '../assets/rectangle.svg'
import User4 from '../assets/user1.png'
import User2 from '../assets/user2.png'
import User3 from '../assets/user3.png'

const CollectionProfile = () => {
    const data = [{id:1, img: User4},
        {id:2, img: User2}
        ,{id:3, img: User3}]
  return (
    <div>
        <ProfileNav/>
        <section className='section-container'>
        <section className=' flex flexColumn mb-5' style={{width: '100%'}}>
        <div className='secondcat-image' style={{width: '100%'}}>
            <img src={location1} alt="location" />
        </div>
         <section className="collection-card-large flex flexSpacebtw"  style={{width: '100%'}}>
         <div className='flex gap-20 secondcat-top'>
        <div className='user-circle mt-3' style={{width: '80px', height: '80px'}}>
            <img src={User1} alt="user" />
        </div>
        <div className='flex flexColumn gap-10' >
          <h3>Elliot Collection Center</h3>
          <div className="flex">
          <div className="ratings">
              <img src={stars} alt="" />
          </div>
          <span style={{marginLeft: '10px'}} className='profilecat-review'>20 Review</span>
          </div>
          <div className="flex">
         <span><HiLocationMarker/></span>
         <p style={{marginLeft: '10px', marginBottom: '0'}} className='pc'>2a, Rumokoro New Layout</p>
        </div>
        <p style={{color: '#939497'}}>Available 2hours ago </p>
        </div>
        </div>
        <NavLink style={{textDecoration: 'none'}}   to='/transactionpage'><button style={{color: 'white', background:'var(--color-green)',width: '200px',height: '50px', borderRadius: '5px', marginTop: '70px'}}>Deposit Plastics</button></NavLink>
         </section>
        <div className='flexCenter gap-10 flexColumn secondcat-top collection-card-small' style={{alignItems: 'flex-start'}}>
            <div className="flex gap-10">
            <div className='user-circle' style={{width: '50px', height: '50px'}}>
                <img src={User1} alt="user" />
            </div>
            <h5 className='align-center' style={{fontSize: '16px', marginBottom: '0'}}>Elliot Collection Center</h5>
            </div>

        <div className='flex flexColumn gap-10' >
      
          <div className="flex">
          <div className="ratings">
              <img src={stars} alt="" />
          </div>
          <span style={{marginLeft: '10px', fontSize: '15px'}} className='profilecat-review align-center'>20 Review</span>
          </div>
          <div className="flex">
         <span><HiLocationMarker/></span>
         <p style={{marginLeft: '10px', marginBottom: '0'}} className='pc'>2a, Rumokoro New Layout</p>
        </div>
        <p style={{color: '#939497', fontSize: '15px',textAlign: 'start'}}>Available 2hours ago </p>
        <NavLink style={{textDecoration: 'none'}}   to='/transactionpage'><button style={{color: 'white', background:'var(--color-green)', padding: '5px 10px', borderRadius: '5px'}}>Deposit Plastics</button>
        </NavLink>

        </div>
        </div>
        </section>

        <section className='serviceMain c-c-1 gap-10' style={{background: 'transparent'}}>
    <div className="service-left-section c1" style={{  width: '50%', border: '1px solid #D5FADB'}}>
    <div className="flex flexColumn" style={{padding: '20px'}}  >
      <h5 className='mb-4' style={{marginBottom: '0'}}>About</h5>
                   <p style={{height: '150px', overflowY: 'scroll'}}>Alex collection center has been in existence for a long period of time. We serve as a middleman between plastic depositors and recycling companies. We make it easy for plastic depositors to dispose their plastic waste and get good payment. Also recycling companies can easily get plastic waste to recycle. We provide excellent services for our customers. </p>
                </div>
    </div>
    <div className="service-right-section c1" style={{border: '1px solid #D5FADB', width: '50%'}}>
    <div className="flex flexColumn c2" style={{padding: '20px'}}>
                    <h5 className='mb-4' style={{marginBottom: '0'}}>Location</h5>
                    <span className='transpan'>2a, Rumokoro New Layout</span>
                    <div style={{width: '100%'}}>
                    <img src={MapImg} alt="" />
                </div>
                </div>
    </div>
</section>
<section>
    <section className="flex flexSpacebtw mt-5">
               <p style={{fontWeight: '700'}}>Review</p>
               <p style={{color: '#00A652', fontSize: '14px', cursor: 'pointer'}}>View All</p>
    </section>
    <main className="testimonials flex">
    {
    data.map(({id, img})=>{
        return(
    <section key={id} className='testimonial-card flex flexColumn'>
    <div className='flex gap-20'>
    <div className='user-circle'>
        <img src={img} alt="user" />
    </div>
    <div className='flex flexColumn gap-20' >
      <h5 className='test-card-header'>Emmanuel King</h5>
      <p>Product Designer</p>
      <div className='Line' style={{width: '53px'}}>
        <img src={Line} alt="" />
      </div>
      <div className="ratings">
          <img src={stars} alt="" />
      </div>
    </div>
    </div>
    <p className='testimonial-info'>I have more clarity thanks to the planet protectors, which makes it easy to track resource allocation, assign processes, and reorder tasks on team capability.</p>
</section>
        )
    })
}

    </main>
</section>

        </section>
    </div>
  )
}

export default CollectionProfile