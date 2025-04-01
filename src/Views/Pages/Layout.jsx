import React from 'react';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';
import Marquee from './Components/Marquee';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Footer />


        </div>
    );
}

export default Layout