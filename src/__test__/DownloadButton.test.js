import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import DownloadButton from '../components/Itinerary/DownloadButton';

// Find the download button
test('renders download button', () => {
  render(<DownloadButton />);
  const downloadButton = screen.getByText('DOWNLOAD THE ITINERARY');
  expect(downloadButton).toBeInTheDocument();
});

// Click the download button
test('clicking the button triggers downloadPDF function', () => {
  const downloadPDFMock = jest.fn();
  render(<DownloadButton downloadPDF={downloadPDFMock} />);
  const downloadButton = screen.getByText('DOWNLOAD THE ITINERARY');
  fireEvent.click(downloadButton);
  expect(downloadPDFMock).toHaveBeenCalled();
});
