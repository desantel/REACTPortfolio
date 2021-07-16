import React, { useState } from 'react';
import Projects from './pages/Projects';
import Contact from './pages/contact';
import Home from './pages/home';
import Header from './pages/Header'
import NavTabs from './navTabs';

export default function PorfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
    }
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header />
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )
}