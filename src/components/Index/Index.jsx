import React, { Component } from 'react';
import Header from '../Header/Header';
import Container2 from '../Container2/Container2';
import Container3 from '../Container3/Container3';

class Index extends Component {
  render() {
    return (
      <div className="Index">
        <Header />
        <Container2 />
        <Container3 />
      </div>
    );
  }
}

export default Index;
