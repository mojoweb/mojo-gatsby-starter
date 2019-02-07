import React, { Component } from 'react';

import {
  TransitionGroup,
  Transition,
} from "react-transition-group";

class Image extends Component {

  state = {
    loaded: false
  }

  onLoad = () => {
    this.setState({
      loaded: true
    })
  }

  render(){

    const { src, className, alt, delay, duration } = this.props;
    const { loaded } = this.state

    const status = loaded ? 'entered' : 'entering'

    const defaultStyles = {
      opacity: 0,
      transition: `all ${duration}ms ${delay}ms ease-out`,
      transform: 'translate3d(0px, 50px, 0px)',
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

    return (
      <TransitionGroup>
      <Transition timeout={delay}>
           
        <img 
          style={{
            ...defaultStyles,
            ...transitionStyles[status],
          }}
          src={src} 
          alt={alt} 
          className={className}
          onLoad={this.onLoad}
        />

      </Transition>
      </TransitionGroup>
    )


  }

}

export default Image;