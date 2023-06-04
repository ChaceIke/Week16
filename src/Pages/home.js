import React from 'react';
import Info from '../Components/Home/accordion'
import CompanyToastMessage from '../Components/Home/toast'

// This is the Home page functional component.
export default function Home() {
    return (
        <div className='home'>
            <h2>Welcome to Securicorp</h2>
            <Info />
            <CompanyToastMessage />
        </div>
    );
}