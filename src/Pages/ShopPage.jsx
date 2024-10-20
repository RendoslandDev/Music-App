import React, { useState } from 'react'
import Layout from '../Components/Layout'
import { ShopPictures } from '../utils/sold'

export default function ShopPage() {



  return (
   
    <Layout>
      <div>
        <h4>DAB <span className='text-gradient font-semibold'>MERCHANDISE</span></h4>
        <section className={Layout.section }>
          <p className='text-7xl'>...</p>
          <div className='card gap-10 p-5 coffee-grid'>
            {ShopPictures.map((option , optionIndex)=>{
              return (
                <section  key={optionIndex}>
                  <div className='card info-card'>
                       <button>
                        <img src={option.image} alt="" />
                        </button>
                       <p>{option.description}</p>
                     <button>{option.amount}</button>
                  </div>
                    
                </section>
              )
            })}
            </div>
          
        </section>
     
      </div>
    </Layout>
  )
}
