import React, { Component } from 'react';
import Header from '../Header/Header';
import Container2 from '../Container2/Container2';
import Container3 from '../Container3/Container3';
import Container4 from '../Container4/Container4';
import Container5 from '../Container5/Container5';
import Container6 from '../Container6/Container6';
import Container7 from '../Container7/Container7';

class Index extends Component {
  render() {
    return (
      <div className="Index">
        <Header />
        <Container2 />
        <Container3 />
        <Container4 />
        <Container5 />
        <Container6 />
        <Container7 />
      </div>
    );
  }
}

export default Index;
