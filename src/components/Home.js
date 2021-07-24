import React from 'react';
import About from './About';
import Contact from './Contact';
import Cover from './Cover';
import Experience from './Experience';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Cover />
            <About />
            <Experience />
            <Contact />
        </div>
    )
}

export default Home;
