import React from "react";
import { render, screen } from "@testing-library/react";
import Reviews from "../components/CityBreaks/Reviews";

// Find the author of the review
test('renders reviewer name', () => {
    
    //Arrange
    render(<Reviews name="James Thomas" />);

    // Act
    const reviewerName = screen.getByText(/James Thomas/i);

    // Assert
    expect(reviewerName).toBeInTheDocument();
});

// Check the text of the review changes
test('renders review text', () => {
    
    //Arrange
    render(<Reviews review="Test review" />);

    // Act
    const review = screen.getByText(/Test review/i);

    // Assert
    expect(review).toBeInTheDocument();
});
