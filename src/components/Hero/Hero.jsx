import React from 'react';
import './Hero.css';
import Transition from '../../helpers/Transition/TextTransition.jsx';
import People from '../../images/people.jpeg';
import Image from '../../helpers/Transition/ImageTransition.jsx'

let duration = 300;
let delay = 750;

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

const Hero = ({headline, subheadline, imgSrc}) => (
  <section className="hero">
    <div className="container hero_content full-width">
      <Transition className={'page_headline_text full-width'} transitionStyles={transitionStyles} defaultStyles={defaultStyles} duration={duration} delay={delay}>
        <h1 className="page_headline">{headline}</h1>
        <h2 className="page_sub_headline">{subheadline}</h2>
      </Transition>
      <div className="half-width">
        <Image className="responsive-img" delay={1000} duration={300} src={imgSrc} alt="" />
      </div>
    </div>
  </section>
)

export default Hero;