import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              < BiCheck className='service__list-icon' />
              <p>Website Design.</p>
            </li>
            <li>
              < BiCheck className='service__list-icon' />
              <p>Web Portals.</p>
            </li>
            <li>
              < BiCheck className='service__list-icon' />
              <p>Website Maintenance.</p>
            </li>
            <li>
              < BiCheck className='service__list-icon' />
              <p>e-Commerce Website Development.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services