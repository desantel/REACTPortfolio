import React from 'react';
import '../styles/Header.css';

const styles = {
    headerStyle: {
        background: 'Twilight Lavender'
    },
    headingStyle: {
        color: 'Celadon',
        fontSize: '100px'
    }
},

function Header() {
    return(
        <header style = {styles.headerStyle} className="header">
            <h1 style={styles.headingStyle}>
                Elizabeth De Santis Portfolio
            </h1>
        </header>
    )
}

export default Header;