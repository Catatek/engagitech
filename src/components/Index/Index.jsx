import React, { Component } from 'react';
import Header from '../Header/Header';
import Container2 from '../Container2/Container2';
import Container3 from '../Container3/Container3';
import Container4 from '../Container4/Container4';
import Container5 from '../Container5/Container5';

class Index extends Component {
  render() {
    return (
      <div className="Index">
        <Header />
        <Container2 />
        <Container3 />
        <Container4 />
        <Container5 />
      </div>
    );
  }
}

export default Index;
