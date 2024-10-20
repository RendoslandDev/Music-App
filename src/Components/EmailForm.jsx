import { card } from '../assets' ;

import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import styles, { layout } from '../utils/style';



export default function EmailForm() {


const  form  = useRef();


const sendEmail = (e) => {
  e.preventDefault();
  // alert("submitted");


  emailjs.sendForm('service_xhkffqs','template_1r49h62', form.current, 'p-HNmoeFLIKzetwh7'). then((result) => {
    console.log(result.text);
  },(error) => {
    console.log(error.text);
  }
)
}

  return (
    <>
    <section className={layout.section}>
             <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
    </section>
     
       <div className='section-header'>
         <i className='fa-solid fa-pencil'></i>
        <h2>For Any Enquires?</h2>
        </div> 
        <hr />
        <div className='card info-card'>
            <form ref={form } onSubmit={sendEmail}>
              <div>
                    <input type="text" placeholder='Enter your name' name='from_name'/>
                </div>
                <div className='mt-5'>
                    <input type="text" placeholder='Enter your Email' name='email_from'/>
                </div>
                 <div className='mt-5'>
                <textarea name="message" id="" cols="30" rows="10"></textarea>
                </div>
                <div >
                <button className='mt-5 w-full font-bolder hover:blue-400' value="Send" type="submit">Send</button>
                </div>
            </form>
        </div>
    </>
  )
}
