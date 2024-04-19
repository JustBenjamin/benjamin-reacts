import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import "../styles/qr.css"

const Qr = () => {


    const [url, setUrl] = useState('');
    const [qrCodeData, setQrCodeData] = useState('');

    const handleInputChange = (event) => {
        setUrl(event.target.value);
    }

    const handleQRCodeGeneration = ()=> {
        setQrCodeData(url)
    }


  return (
    <div className='qr'>
      <h1>QR Code Generator</h1>
      <input type="text"
             value={url}
             onChange={handleInputChange}
             placehoder="Enter URL"
      />

      <button onCLick={handleQRCodeGeneration}>Generate QR Code</button>

      {qrCodeData && <QRCode value={qrCodeData} size={256} level="L"/> }



    </div>
  )
}

export default Qr
