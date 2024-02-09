import React from 'react';
import { Button } from 'react-bootstrap';
import html3pdf from 'html3pdf';
import "./DownloadButton.css"

function DownloadButton({ downloadPDF }) {
  const downloadPDFHandler = () => {
    // Call the provided downloadPDF function
    if (downloadPDF) {
      downloadPDF();
    }

    const element = document.getElementById('pdf-content');

    // Ensure the element is found
    if (!element) {
      console.log("Element with id 'pdf-content' not found.");
      return;
    }

    const pdfOptions = {
      filename: 'Itinerary_NS_Travel.pdf',
      margin: [10, 1, 10, 1],
      pagebreak: { mode: 'avoid-all' },
      enableLinks: true,
    };

    // Generate the PDF
    html3pdf(element, pdfOptions);
  };

  return (
    <div className="download">
      <div className="download-text">
        <div className="download-slogan">EMBARK ON YOUR JOURNEY!</div>
        SEAMLESSLY CRAFTED, SIMPLY ENJOYED
        <div className="company-name">NS Travel Services</div>
      </div>
      <div className="button-container">
        <Button className="download-button" onClick={downloadPDFHandler}>
          DOWNLOAD THE ITINERARY
        </Button>
      </div>
    </div>
  );
}

export default DownloadButton;