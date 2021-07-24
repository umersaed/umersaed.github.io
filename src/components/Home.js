import React from 'react';
import About from './About';
import Contact from './Contact';
import Cover from './Cover';
import Experience from './Experience';
import Footer from './Footer';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Cover />
            <About />
            <Experience />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home;
