import React, { Component } from 'react';
import Header from '../Header/Header.jsx';
import Transition from '../../helpers/Transition/PageTransition.jsx';

export default class AppLayout extends Component {
  
  render(){
    const { children, location } = this.props
    console.log(location);
    return(
      <React.Fragment>
        <Header pathname={location.pathname} />
        <Transition location={location}>
          {children}
        </Transition>
      </React.Fragment>
    )
  }
}