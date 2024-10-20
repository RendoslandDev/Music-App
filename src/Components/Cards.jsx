import React from 'react'

export default function Cards(props) {
  const {selectedTab} = props
  

  
  return (
   <section>
    {selectedTab === 'tab1' && (
      <div className='card'>
        {ShopPictures.map((option, optionIndex)=>{
          return (
            <button>{option.image}</button>
          )
        })}
      </div>
    )}
   </section>
  )
}
