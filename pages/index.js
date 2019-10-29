import Link from 'next/link';
import Layout from '../components/Layout'
import {Component} from 'react'

class Home extends Component {
    componentDidMount() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('service worker registration successful', registration);
        })
        .catch(err => {
          console.warn('service worker registration failed', err);
        })
    }
  }
  render() {
    return(    
       
        <Layout>
          <div style={{    minHeight: '433px' }}>
            <img src="/static/icons/icon-192x192.png" alt="logo" title="logo"/>       
            </div>
            <style jsx>
              { 
                `
                img{
                  position: relative;
                  padding-top: 70px;
                }
                `
              }
            </style>
        </Layout>
    )
  }
   
}

export default Home;