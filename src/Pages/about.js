import React from 'react';
import CompanyImages from '../Components/About/Carousel';
import CompanyHireMessage from '../Components/About/hire-messsage';

// This is the about page functional component.
export default function About() {
    return (
        <div>
            <div className="about">
                <h2>About Us</h2>
                <CompanyImages />
            </div>
            <div>
                <CompanyHireMessage />
            </div>
        </div>
    );
}