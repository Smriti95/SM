import QRCodeReader from '../components/QRCodeReader'
import Layout from '../components/Layout'

const QrCode = () => {
    return(
        <Layout>
            <h4>Scan the QR Code Here</h4>
            <QRCodeReader/>
        </Layout>
    )
}

export default QrCode