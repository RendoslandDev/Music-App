import React from 'react'
import Layout from '../Components/Layout'
import styles from '../utils/style'
import { TagPicturres } from '../utils'
// import React from 'react/'
import style from '../utils/style'






export default function BioPage() {
  return (
    <>
    <Layout>
      <h5>Biography</h5>
    <section className='card info-card'>
      <div>
            <i className='fa-solid fa-circle-info'></i>
            <h3>Biography ...</h3>
        </div>
        <h5 className='text-gradient'>Listen to your music and</h5>
        <p>The music industry is a dyanamic and multifacted realm that encompasses creation , distribution and consumption of music.It serve as a melting pot where artiste, producers, promoters and technology to shape the ever <span className='text-gradient text-2xl'>evolving landscape of sound.</span> From the raw creativity of artiste in studio to the strategic planning of industry proffessionals, the music industry is homonious blend of artistry and commerce.</p>
        <p>Digital platforms and streaming services have revolutionized the way we access and experience music, democratizing the industry and providing a global stage for both established and emerging talents. Social media has become a powerful tool for artists to connect directly with their fanbase, dismantling traditional barriers and fostering a more intimate relationship between creators and consumers.  The music industry is not just a business; it’s a cultural force that reflects the zeitgeist, shapes societal trends, and influences the way we perceive the world.</p>
        <p className='text-7xl'>...</p>
    </section>

      <div className='card info-card'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/_4dDdPMGz1o?si=1tGr9AjMA5rW5ljm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>



    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      {/* <h2 className={styles.heading2}>
        What People are <br className="sm:block hidden" /> saying about <span className='text-gradient'>DAB</span>
      </h2> */}
      <div className=''>
        <h5>My Style and Inspiration</h5>
        <span>Delivering Happiness,One Sound at a Time</span>
        <p>
          Digital platforms and streaming services have revolutionized the way we access and experience music, democratizing the industry and providing a global stage for both established and emerging talents.  The music industry is not just a business; it’s a cultural force that reflects the zeitgeist, shapes societal trends, and influences the.
        </p>
        <h6>DAB</h6>
      </div>
      <div className="w-full md:mt-0 mt-6">
        {TagPicturres.slice(0,1).map((option , optionIndex)=>{
          return (
            <button  className={'button-card '} key={optionIndex}>
              <button><img src={option.image} alt="" /></button>
            </button>
          )
        })}
      </div>
      </div>
       
    </Layout>
    </>
  )
}
