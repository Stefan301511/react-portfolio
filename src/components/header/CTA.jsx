import React from 'react'
// eslint-disable-next-line no-unused-vars
import CV from '../../assets/StefanCV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA