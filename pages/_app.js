import App, { Container } from 'next/app';

import Header from '../components/Header';
//import OfflineSupport from '../service-worker';

class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>       
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default CustomApp;