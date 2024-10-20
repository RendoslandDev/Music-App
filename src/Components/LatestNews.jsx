import {React , useState} from 'react'
import styles, { layout } from '../utils/style';
import { TagPicturres } from '../utils'
import { people01, people02, people03,  } from '../assets';
import { products } from '../utils/sold';
// import React from 'react';



export default function LatestNews() {

// const [coverArt , setCoverArt] = useState(false)

  return (
      <>
             <h5 className='flex flex-col justify-center items-center '>Blogs</h5>
             <div className='coffee-grid'>
        {TagPicturres.slice(0, 7).map((option , optionIndex)=>{
          return (
            <button  className={'button-card p-5 '} key={optionIndex}>
              <p className='p-1'>{option.name}</p>
              <button className='h-[250px]'><img src={option.image} alt="" /></button>
              <span className='mt-5'>{option.title}</span>
            </button>
          )
        })}
        {/* <button onClick={() => {
          // setCoverArt(true)
        }} >LOAD MORE</button> */}
      </div>

      <section className='card info-card'>
          <h5 className='underline'>POPULAR PRODUCTS</h5>
          <div className='item-grid px-5 '>
            {products.map((prod , prodIndex) => {
              return (
                <div key={prodIndex}>
                  <button>
                  <img src={prod.image} alt="" />
                  </button>
                  </div>
              )
            })}
          </div>
      </section>

      <hr />
      <p className='card info-card'>
        <h1 className='text-7xl'>...</h1>
        in this complex acosysytem artists are not just creators, they are storytellers, weaving narratives that resonate with the collective human experience , Products, equipped with cutting-edge technology, script these stories into sonic masterpieces, pushing the boundaries of innovation.Record labels and promoters become the architects, building bridges between artists and audiences , amplifying the reach the reach of musical experiences.
      </p>
            
      </>
  )
}
