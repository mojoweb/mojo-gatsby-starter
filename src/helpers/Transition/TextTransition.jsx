import React from 'react';

import {
  TransitionGroup,
  Transition,
} from "react-transition-group";


const Move = ({children, duration, delay, transitionStyles, defaultStyles, className}) => {

  return (
    //coming from  'react-transition-group' and are required for transitions to work */}
    <TransitionGroup>
    <Transition
        //duration of transition
        timeout={delay}
        appear
          >
              {
                  //Application of the styles depending on the status of page(entering, exiting, entered) in the DOM
                  status => {
                    return (
                  <div
                      style={{
                          ...defaultStyles,
                          ...transitionStyles[status],
                      }}
                      className={className}
                  >
                  {children}
                  </div>
              )}}
          </Transition>
      </TransitionGroup>
)};

export default Move;