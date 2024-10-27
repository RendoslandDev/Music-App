import React from 'react'
import { apple, instagram, linkedin, logo , twitter } from '../assets'
import styles, { layout } from '../utils/style';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from 'react-bootstrap';
import { footerLinks , socialMedia} from '../utils'








export default function Layout(props) {


    const {children} = props





     const header = (
        <header>
          <div>
            <h1 className='text-gradient'>DAB-BEATS</h1>
            <p>Good Sounds Initiatives</p>
          </div>
           <DropdownButton id="dropdown-item-button" title='Menu'>
      <Dropdown.Item as="button"><a href="/" className='text-white'>Home</a></Dropdown.Item>
      <Dropdown.Item as="button"><a href="/biography" className='text-white'>Bio</a></Dropdown.Item>
      <Dropdown.Item as="button"><a href="/shop" className='text-white'>Shop</a></Dropdown.Item>
      <Dropdown.Item as="button"><a href="/contact" className='text-white'>Contact</a></Dropdown.Item>
      <Dropdown.Item as="button"><a href="/event" className='text-white'>Events</a></Dropdown.Item>

    </DropdownButton>
        </header>
    )

    const footer = (
         <footer>

          <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
       <h5 className='text-gradient'>DAB-BEATS</h5>
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A new way to make the music easy, reliable and secure.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2022 PENTA TECH. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
         
         </footer>
    )
  return (
    <>
    {header}
    <main>{children}</main>
    {footer}
    </>
  )
}
