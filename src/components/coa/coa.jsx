import React from 'react'
import './coa.css'
import '../ThirdCat/ThirdCat.css'
import { NavLink } from "react-router-dom";
import Img1 from '../../assets/bgdecor.png'


const Coa = () => {
  return (
   <section className='section section-container' style={{position: 'relative'}} id='contact'>
<h5>Join Us</h5>
<h2>Be A Part Of Our Users</h2>
<div style={{position: 'absolute', right: '500px', bottom: '57%' , width: '200px'}}><img src={Img1} alt="" /></div>
<div style={{position: 'absolute', right: '500px', bottom: '25%' , width: '200px'}}><img src={Img1} alt="" /></div>
<section className='serviceMain'  style={{background: 'white'}}>
   
    <div className="service-left-section">
    <div className="flex thirdcat-cont">
       <div className="flex flexColumn thirdcat-card1">
        <h3>Want to be a collector?</h3>
        <p>Register and start collecting <br/>plastics.</p>
        <NavLink style={{textDecoration: 'none', backgroundColor: 'white'}}  to ='/signup'  className='SignUp register button'>Register now</NavLink>
        
       </div>
       </div>
    </div>
    <div className="service-right-section">
        <h3>A Depositor</h3>
        <p>With planet protector you can easily dispose your plastic waste at collection center nearest to you and also get paid for it. </p>
        
    </div>
</section>
<section className='serviceMain serviceSecondMain mt-4 mb-4'   style={{background: 'white', marginTop: '0'}}>
    <div className="service-right-section" style={{paddingLeft: '20px'}}>
        <h3>A Collector</h3>
        <p>Planet protector helps connect plastic depositor with plastic collection centers making it easy for collector to get plastic waste from individuals. </p>
        
    </div>
    <div className="service-left-section">
    <div className="flex thirdcat-cont">
       <div className="flex flexColumn thirdcat-card2">
        <h4>Want to be a recycler?</h4>
        <p>It’s easy to get started once <br /> you are ready.</p>
        <NavLink style={{textDecoration: 'none', backgroundColor: 'white'}}  to ='/sign-up-provider'  className='SignUp register button'>Register now</NavLink>
        
       </div>
   </div>
    </div>
</section>
<section className='serviceMain'  style={{background: 'white'}}>
    <div className="service-left-section">
    <div className="flex thirdcat-cont">
       <div className="flex flexColumn thirdcat-card3">
        <h3>Want to be a collector?</h3>
        <p>Register and start collecting <br/>plastics.</p>
        <NavLink style={{textDecoration: 'none', backgroundColor: 'white'}}  to ='/signup'  className='SignUp register button'>Register now</NavLink>
        
       </div>
       </div>
    </div>
    <div className="service-right-section">
        <h3>A Recycler</h3>
        <p>We help recycler to easily collect plastic waste deposited by the depositors and recycle them into new products . </p>
        
    </div>
</section>
   </section>
  )
}

export default Coa