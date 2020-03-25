import React from 'react';
import NavBar1 from './components/NavBar1';
import MainNavBar from './components/MainNavBar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function HomePage() {
  return (
    <div>
        <NavBar1 />
        <MainNavBar />
        <MainContent />
        <Footer />
    </div>
  );
}

export default HomePage;
