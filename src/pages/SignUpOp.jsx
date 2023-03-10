import React from 'react'
import { NavLink } from 'react-router-dom'
import SetUp from '../components/dashboard/SetUp'
import Footer from '../components/footer/Footer'


const SignUpOp = () => {
  return (
    <section style={{background: 'var(--color-light)'}}>
    <section className="profilesetupheader flexColumn align-center">
        <p style={{fontSize: '20px', fontWeight: '600'}}>Welcome To</p>
        <p className='profilesetup-p' style={{fontSize: '40px', fontWeight: '700'}}>Planet Protectors</p>
        <p style={{fontSize: '20px', fontWeight: '600'}}>Set up your profile to continue</p>
    </section>
    <section className='profilesetupcont signupop-cont'>
    <section className='serviceMainOp'  style={{background: 'white'}}>
   
   <div className="service-left-section">
   <div className="flex thirdcat-cont-a">
      <div className="flex flexColumn thirdcat-card1">
       <h3>Want to be a collector?</h3>
       <p>Register and start collecting <br/>plastics.</p>
       <NavLink style={{textDecoration: 'none', backgroundColor: 'white'}}  to ='/signup'  className='SignUp register button'>Register now</NavLink>
       
      </div>
      </div>
   </div>
   <div className="service-right-section-op">
       <h3>A Depositor</h3>
       <p>With planet protector you can easily dispose your plastic waste at collection center nearest to you and also get paid for it. </p>
       
   </div>
</section>
<section className='serviceMainOp serviceSecondMain mt-4 mb-4'   style={{background: 'white', marginTop: '0'}}>
   <div className="service-right-section-op" >
       <h3>A Collector</h3>
       <p>Planet protector helps connect plastic depositor with plastic collection centers making it easy for collector to get plastic waste from individuals. </p>
       
   </div>
   <div className="service-left-section">
   <div className="flex thirdcat-cont-a">
      <div className="flex flexColumn thirdcat-card2">
       <h4>Want to be a recycler?</h4>
       <p>It’s easy to get started once <br /> you are ready.</p>
       <NavLink style={{textDecoration: 'none', backgroundColor: 'white'}}  to ='/sign-up-provider'  className='SignUp register button'>Register now</NavLink>
       
      </div>
  </div>
   </div>
</section>
<section className='serviceMainOp'  style={{background: 'white'}}>
   <div className="service-left-section">
   <div className="flex thirdcat-cont-a">
      <div className="flex flexColumn thirdcat-card3">
       <h3>Want to be a collector?</h3>
       <p>Register and start collecting <br/>plastics.</p>
       <NavLink style={{textDecoration: 'none', backgroundColor: 'white'}}  to ='/signup'  className='SignUp register button'>Register now</NavLink>
       
      </div>
      </div>
   </div>
   <div className="service-right-section-op">
       <h3>A Recycler</h3>
       <p>We help recycler to easily collect plastic waste deposited by the depositors and recycle them into new products . </p>
       
   </div>
</section>
    </section>
    <Footer/>
   </section>
  )
}

export default SignUpOp