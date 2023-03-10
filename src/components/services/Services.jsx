import React from 'react'
import './Services.css'
import Img1 from '../../assets/service1.svg'
import Img2 from '../../assets/news4.png'
import Img3 from '../../assets/offer1.svg'
import Img4 from '../../assets/Frame.png'
import Img5 from '../../assets/Frame2.png'


const Services = () => {
  return (
   <section className='section section-container service-container' style={{position: 'relative'}} id='features'>
      <div style={{position: 'absolute', top: '130px', left: '50px', width: '200px'}}><img src={Img5} alt="" /></div>
    <div style={{position: 'absolute', bottom: '0', right: '50px', width: '200px'}}><img src={Img4} alt="" /></div>
<h5>Our Service</h5>
<h2>What We Offer</h2>
<section className='flex gap-30 service-flex'>
<section className='serviceMainnew'>
    <div className="service-left-section">
       <div className="service-img">
        <img src={Img1} alt="" />
       </div>
    </div>
    <div className="service-right-sectionnew" style={{textAlign: 'center'}}>
        <div style={{background: 'white'}}>
        <h3>We Connect Recycling Company 
        With Collection Center</h3>
        <p style={{width: '100%'}}>Our plastic collectors receive financial incentives for collecting plastic waste, and dropping them off at the nearest collection centre..</p>
        <span className='mt-2' style={{borderBottom: "1px solid #AEFFBB",marginBottom:'0'}}>Learn more</span>
        </div>
    </div>
</section>
<section className='serviceMainnew'>
    <div className="service-left-section">
       <div className="service-img">
        <img src={Img2} alt="" />
       </div>
    </div>
    <div className="service-right-sectionnew" style={{textAlign: 'center'}}>
        <div style={{background: 'var(--color-green)',  color: 'white', borderBottom: '5px solid #AEFFBB'}}>
        <h3>We Connect Recycling Company 
        With Collection Center</h3>
        <p style={{width: '100%'}}>Our plastic collectors receive financial incentives for collecting plastic waste, and dropping them off at the nearest collection centre..</p>
        <span className='mt-2' style={{borderBottom: "1px solid #AEFFBB",marginBottom:'0'}}>Learn more</span>
        </div>
    </div>
</section>
<section className='serviceMainnew'>
    <div className="service-left-section">
       <div className="service-img">
        <img src={Img3} alt="" />
       </div>
    </div>
    <div className="service-right-sectionnew" style={{textAlign: 'center'}}>
        <div style={{background: 'white'}}>
        <h3>We Connect Recycling Company 
        With Collection Center</h3>
        <p style={{width: '100%'}}>Our plastic collectors receive financial incentives for collecting plastic waste, and dropping them off at the nearest collection centre..</p>
        <span className='mt-2' style={{borderBottom: "1px solid #AEFFBB",marginBottom:'0'}}>Learn more</span>
        </div>
    </div>
</section>
</section>
   </section>
  )
}

export default Services