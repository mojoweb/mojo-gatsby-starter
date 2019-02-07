import React, { Component } from 'react';
import Header from '../Header/Header.jsx';
import Transition from '../../helpers/Transition/PageTransition.jsx';

export default class AppLayout extends Component {
  
  render(){
    const { children, location } = this.props
    return(
      <React.Fragment>
        <Header />
        <Transition location={location}>
          {children}
        </Transition>
      </React.Fragment>
    )
  }
}