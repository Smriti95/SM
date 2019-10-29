import { Component } from 'react'
import dynamic from "next/dynamic";

const QrReader = dynamic(
    () => import('react-qr-reader'),
    {
        ssr: false
    }
)
 
class Test extends Component {
  state = {
    result: 'No results found. Please scan the QR Code'
  }
 
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
      window.location.href = this.state.result
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
      <div>
        <QrReader
          delay={10}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
        <p>{this.state.result}</p>
      </div>
    )
  }
}

export default Test