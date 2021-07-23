import React from 'react';
import About from './About';
import Cover from './Cover';
import Experience from './Experience';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Cover />
            <About />
            <Experience />
        </div>
    )
}

export default Home;
