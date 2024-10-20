import React from 'react'
import LatestNews from './LatestNews'


import styles from '../utils/style'


export default function Hero() {

  return (
    <>
      
      
<h1>Cooking Beats for BEAT <abr title="An enthusiast or devoted">Lovers</abr>!</h1>
      <div className='benefits-list'>
        <h3 className='font-bolder'>Try <span className='text-gradient'>DAB-BEATS</span> and start...</h3>
        <p>✔  Mastering</p>
        <p>✔ Cool Demo</p>
        <p>✔ Mixing</p>
        <p>✔ Pitching Songs</p>
        <p>✔ Copyrighting your songs</p>
        <span className='text-3xl'>etc</span>
        <p className='text-7xl'>...</p>
      </div>
      <div className='card info-card'>
        <div>
            <i className='fa-solid fa-circle-info'></i>
            <h3>Did you know ...</h3>
        </div>
        <h5>that Dab&apos;s beats is offering opportunities for sound lovers?</h5>
        <p>This means that after 5 hours, half coffiene you is still in your system keeping  you alert longer!So if you  drink a cup of coffie with 200mg of coffiene, 5 hours later, you&apos;ll still  have about 100 mg of coofiene in your system</p>
        <button><a href="./EventPage">CHECK</a>  </button>
      </div>
      <hr />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        What People are <br className="sm:block hidden" /> saying about <span className='text-gradient'>DAB</span>
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to make music <span className='text-gradient'>legit</span> and grow your songs
          anywhere on the planet.
        </p>
      </div>
    </div>
      <div className='card info-card'>
        <div>
            <i className='fa-solid fa-circle-info'></i>
            <h3>Biography ...</h3>
        </div>
        <h5 className='text-gradient'>Listen to your music and</h5>
        <p>The music industry is a dyanamic and multifacted realm that encompasses creation , distribution and consumption of music.It serve as a melting pot where artiste, producers, promoters and technology to shape the ever <span className='text-gradient text-2xl'>evolving landscape of sound.</span> From the raw creativity of artiste in studio to the strategic planning of industry proffessionals, the music industry is homonious blend of artistry and commerce.</p>
      </div>
  <LatestNews/>
    </>
  )
}
