import React, { Component } from 'react';
import Header               from './header/Header';
import Footer               from './footer/Footer';
import Items               from './items/Items';

import './root.scss';

export default class Root extends Component {
  render() {
    return (
      <div>
        <Header />
          <Items />
        <Footer />
      </div>
    );
  }
}
