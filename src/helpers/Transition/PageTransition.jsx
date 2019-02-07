//Import necessary dependencies 

import React from "react"
import './PageTransitions.css';
import {
    TransitionGroup,
    CSSTransition,
    Transition as ReactTransition,
} from "react-transition-group"

//This variable will be responsible for our animation duration
const timeout = 400
const swiperTimeout = 800;

//This object contains basic styles for animation, but you can extend them to whatever you like. Be creative!
const getTransitionStyles = {
    entering: {
        position: 'absolute',
        opacity: 0,
    },
    entered: {
        opacity: 1,
    },
    exiting: {
        opacity: 1
    },
}

class Transition extends React.PureComponent {
    render() {
        //Destructuring props to avoid garbage this.props... in return statement
        const { children, location } = this.props

        return (
          <React.Fragment>
            {/* //Using TransitionGroup and ReactTransition which are both 
            //coming from  'react-transition-group' and are required for transitions to work */}
            <TransitionGroup>
                <ReactTransition
                //the key is necessary here because our ReactTransition needs to know when pages are entering/exiting the DOM
                    key={location.pathname}
                    //duration of transition
                    timeout={{
                        enter: timeout,
                        exit: timeout,
                    }}
                >
                    {
                        //Application of the styles depending on the status of page(entering, exiting, entered) in the DOM
                        status => (
                        <div
                            style={{
                                ...getTransitionStyles[status],
                            }}
                        >
                        {children}
                        </div>
                    )}
                </ReactTransition>
            </TransitionGroup>
            <TransitionGroup>
                <CSSTransition
                //the key is necessary here because our ReactTransition needs to know when pages are entering/exiting the DOM
                    key={location.pathname}
                    //duration of transition
                    timeout={swiperTimeout}
                    classNames="active"
                >
                    {
                        <div
                            className="swiper"
                        >
                        </div>
                    }
                </CSSTransition>
            </TransitionGroup>
            </React.Fragment>
        )
    }
}

export default Transition