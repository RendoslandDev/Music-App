import React from 'react'
import Layout from '../Components/Layout'
import { layout } from '../utils/style'
import { eventfort } from '../utils'



export default function EventsPages() {
  return (
   <Layout>

  <div className='card info-card'>
    <h5 className='section-header'>Events</h5>
    <div className='card mt-10 mb-5'>
   <i className="fa-solid fa-champagne-glasses"></i>
   <dd className='text-2xl'>Find Your Dream Events With Your Fav Dj</dd>
    </div>


     <section className='flex flex-row-2'>
    <div>
      {eventfort.map((option , optionIndex)=>{
        return (
          <section  key={optionIndex}>
                  <div className='card info-card coff-grid'>
                       <button>
                        <img src={option.image} alt="" />
                        </button>
                     <p>{option.title}</p>
                       <p>{option.description}</p>
                       <button>Read more</button>
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
