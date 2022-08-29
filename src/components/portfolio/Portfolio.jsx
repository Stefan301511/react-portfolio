import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'


// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Restaurant',
    github: 'https://github.com/Stefan301511/Restaurant',
    demo: 'https://restaurant-seven-swart.vercel.app'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Background-generator',
    github: 'https://github.com/Stefan301511/background-generator',
    demo: 'https://background-generatorbestcolors.netlify.app'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Robofriends Cards',
    github: 'https://github.com/Stefan301511/robofriends1',
    demo: 'https://robofriendscards.netlify.app'
  },
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image,title, github, demo}) => {
            return (
              <article key ={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                  <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio