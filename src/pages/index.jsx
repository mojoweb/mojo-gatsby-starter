import React from "react"
import Hero from '../components/Hero/Hero.jsx';
import People from '../images/people.jpeg';
import Image from '../helpers/Transition/ImageTransition.jsx'
import SEO from '../helpers/SEO/SEO.jsx'
import FlexGrid from '../helpers/FlexGrid/FlexGrid.jsx'
import Transition from '../helpers/Transition/TextTransition.jsx'
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
    <Hero headline={`Þú ert á forsíðunni!`} subheadline={`Vonandi er það gaman!`} imgSrc={'https://bento.cdn.pbs.org/hostedbento-prod/filer_public/Big%20Pacific/Photos/BigPacific_Promo_Thumb.jpg?1225559157.415'} />
    <Transition className={'container'} transitionStyles={transitionStyles} defaultStyles={defaultStyles} duration={duration} delay={delay}>
      <FlexGrid perRow={2} items={mapGridItems(items)} />
    </Transition>
  </React.Fragment>
  )
}

let items = [
  {
    title: 'Ég er card!',
    description: 'Ég er description á cardi!',
    src: 'https://bento.cdn.pbs.org/hostedbento-prod/filer_public/Big%20Pacific/Photos/BigPacific_Promo_Thumb.jpg?1225559157.415',
    linkTo: '/page-2'
  },
  {
    title: 'Ég er card!',
    description: 'Ég er description á cardi!',
    src: 'https://bento.cdn.pbs.org/hostedbento-prod/filer_public/Big%20Pacific/Photos/BigPacific_Promo_Thumb.jpg?1225559157.415',
    linkTo: '/page-2'
  },
  {
    title: 'Ég er card!',
    description: 'Ég er description á cardi!',
    src: 'https://bento.cdn.pbs.org/hostedbento-prod/filer_public/Big%20Pacific/Photos/BigPacific_Promo_Thumb.jpg?1225559157.415',
    linkTo: '/page-2'
  },
]