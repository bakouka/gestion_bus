import React from 'react';
import QRCode from 'qrcode.react';

function QRCodeGenerator() {
  const qrData = "https://www.example.com"; // Remplacez par les données que vous voulez encoder

  return (
    <div>
      <QRCode value={qrData} />
    </div>
  );
}

export default QRCodeGenerator;
