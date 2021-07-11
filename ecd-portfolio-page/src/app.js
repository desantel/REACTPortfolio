import React from "react";
import Header from './components/pages/Header';
import Projects from './components/pages/Projects';
import Navbar from './components/pages/Navbar';
import Footer from './components/pages/Footer';

function App() {
    return (
        <div>
            <Header />
            <Navbar />
            <Projects />
            <Footer />
        </div>
    )
};

export default App;