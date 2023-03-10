import React from 'react'
import './FirstCategory.css'
import Img1 from '../assets/can.svg'
import Img2 from '../assets/cup.svg'

const FirstCategory = () => {
    const data = [{id:1, img: Img1},{id:2, img: Img2},{id:3, img: Img1}, {id:4, img: Img2}, {id:5, img: Img1}]
  return (
 <section className='section section-container'>
<div className="flex flexSpacebtw" style={{marginBottom: '100px'}}>
    <h4>Plastic Categories</h4>
    <span style={{color: '#118924'}}>View All</span>
</div>
<main className="firstcat-innerwrapper">
{
    data.map(({id, img})=>{
        return(
    <section key={id} className='firstcat-steps'>
    <div className='firstcat-img'>
        <img src={img} alt="" />
    </div>
    <div className="firstcat-div">
    <p >Cans</p>
    </div>

</section>
        )
    })
}
</main>
 </section>
  )
}

export default FirstCategory