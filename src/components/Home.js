import React from 'react';
import About from './About';
import Cover from './Cover';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Cover />
            <About />
        </div>
    )
}

export default Home;
