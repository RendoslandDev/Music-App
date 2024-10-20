import { useState , useRef} from 'react';
import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Cards from './Cards';
import { ShopPictures , Hoodie  , shirts, caps} from '../utils/sold'
import { layout } from '../utils/style';


export default function Tabs() {

  const [selectedTab , setSelectedTab] = useState('tab1')

  const handleTabChange = (tab) => {
    setSelectedTab(tab)
  }
  
  return (
  <div className='tab-container'>
    <div className='tabs hover:text-blue-400'>
      <button  className={selectedTab === 'tab1' ? 'bg-blue-100 text-black' : ''}
        onClick={() => handleTabChange('tab1')}
      >
        All
      </button>
       <button  className={selectedTab === 'tab2' ? 'bg-blue-100 text-black' : '' + "mx-3"}
        onClick={() => handleTabChange('tab2')}
      >Hoodie
        </button> 
         <button  className={selectedTab === 'tab3' ? 'bg-blue-100 text-black' : ''  + "mx-5"}
        onClick={() => handleTabChange('tab3')}
      >Shirts
        </button> 
        <button  className={selectedTab === 'tab4' ? 'bg-blue-100 text-black' : '' }
        onClick={() => handleTabChange('tab4')}
      >Caps
        </button> 
        <hr  className=' mt-5 mb-5'/>
    </div>
      <div className='tab-container'>
        {selectedTab === 'tab1' && (
          <div className=' coffee-grid'>
            {ShopPictures.map((tab, tabIndex)=>{
              return(
              <section  key={tabIndex}>
                  <div className='card info-card'>
                       <button onClick={()=>{}}>
                        <img src={tab.image} alt="" /></button>
                       <p>{tab.description}</p>
                     <button>{tab.amount}</button>
                  </div>
                </section>
              )
            })}
          </div>
        )}
      </div>
       <div className='tab-container'>
        {selectedTab === 'tab2' && (
         <div className='card info-card coffee-grid'>
            {Hoodie.map((tab, tabIndex)=>{
              return(
              <section  key={tabIndex}>
                  <div className='card info-card'>
                       <button>
                        <img src={tab.image} alt="" />
                        </button>
                       <p>{tab.description}</p>
                     <button>{tab.amount}</button>
                  </div>
                </section>
              )
            })}
          </div>
        )}
      </div>
       <div className='tab-container'>
        {selectedTab === 'tab3' && (
         <div className='card info-card coffee-grid'>
            {shirts.map((tab, tabIndex)=>{
              return(
              <section  key={tabIndex}>
                  <div className='card info-card'>
                       <button>
                        <img src={tab.image} alt="" />
                       </button>
                       <p>{tab.description}</p>
                     <button>{tab.amount}</button>
                  </div>
                </section>
              )
            })}
          </div>
        )}
      </div>

       <div className='tab-container'>
        {selectedTab === 'tab4' && (
         <div className='card info-card coffee-grid'>
            {caps.map((tab, tabIndex)=>{
              return(
              <section  key={tabIndex}>
                  <div className='card info-card'>
                       <button><img src={tab.image} alt="" /></button>
                     <button>{tab.amount}</button>
                  </div>
                </section>
              )
            })}
          </div>
        )}
      </div>

  </div>

  )
}
