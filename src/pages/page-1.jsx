import React from "react"
import Hero from '../components/Hero/Hero.jsx';
import Image from '../helpers/Transition/ImageTransition.jsx'
import FlexGrid from '../helpers/FlexGrid/FlexGrid.jsx'
import Transition from '../helpers/Transition/TextTransition.jsx'
import SEO from '../helpers/SEO/SEO.jsx'
import { Link } from 'gatsby';

let duration = 300;
let delay = 1250;

const defaultStyles = {
  opacity: 0,
  transform: 'translate3d(0px, 50px, 0px)',
  transition: `all ${duration}ms ease-out`
}

const transitionStyles = {
  entering: { 
    opacity: 0,
    transform: 'translate3d(0px, 50px, 0px)',
  },
  entered:  { 
    opacity: 1,
    transform: 'translate3d(0px, 0px, 0px)',
   },
};


export default () => {

  const mapGridItems = (arr) => {
    
    let items = arr.map(item => {
      return (
        <div className="flex_grid_item">
          <div className="card_item">
            <Image src={item.src} className="responsive-img" alt=""/>
            <h5>{item.title}</h5>
            <p>{item.description}</p>
            <Link to={item.linkTo}>Ég er call to action</Link>
          </div>
        </div>
      )
    })

    return items;
  }
  
  return (
    <React.Fragment>
      <SEO />
      <Hero headline={`Þú ert á síðu eitt!`} subheadline={`Vonandi er það gaman!`} imgSrc={'https://images.unsplash.com/photo-1509588059631-cd16608b9e6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1516&q=80'} />
      <Transition className={'container'} transitionStyles={transitionStyles} defaultStyles={defaultStyles} duration={duration} delay={delay}>
        <FlexGrid perRow={3} items={mapGridItems(items)} />
      </Transition>
    </React.Fragment>
  )
}

let items = [
  {
    title: 'Ég er card!',
    description: 'Ég er description á cardi!',
    src: 'https://images.unsplash.com/photo-1509588059631-cd16608b9e6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1516&q=80',
    linkTo: '/page-2'
  },
  {
    title: 'Ég er card!',
    description: 'Ég er description á cardi!',
    src: 'https://images.unsplash.com/photo-1509588059631-cd16608b9e6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1516&q=80',
    linkTo: '/page-2'
  },
  {
    title: 'Ég er card!',
    description: 'Ég er description á cardi!',
    src: 'https://images.unsplash.com/photo-1509588059631-cd16608b9e6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1516&q=80',
    linkTo: '/page-2'
  },
  {
    title: 'Ég er card!',
    description: 'Ég er description á cardi!',
    src: 'https://images.unsplash.com/photo-1509588059631-cd16608b9e6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1516&q=80',
    linkTo: '/page-2'
  },
  {
    title: 'Ég er card!',
    description: 'Ég er description á cardi!',
    src: 'https://images.unsplash.com/photo-1509588059631-cd16608b9e6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1516&q=80',
    linkTo: '/page-2'
  },
  {
    title: 'Ég er card!',
    description: 'Ég er description á cardi!',
    src: 'https://images.unsplash.com/photo-1509588059631-cd16608b9e6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1516&q=80',
    linkTo: '/page-2'
  },
  {
    title: 'Ég er card!',
    description: 'Ég er description á cardi!',
    src: 'https://images.unsplash.com/photo-1509588059631-cd16608b9e6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1516&q=80',
    linkTo: '/page-2'
  },
  {
    title: 'Ég er card!',
    description: 'Ég er description á cardi!',
    src: 'https://images.unsplash.com/photo-1509588059631-cd16608b9e6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1516&q=80',
    linkTo: '/page-2'
  },
]