import React, { Component } from 'react';
import Container from './styled';

class Loading extends Component {
  render() {
    return (
      <Container>
        <h1>Carregando...</h1>
      </Container>
    );
  }
}

export default Loading;
