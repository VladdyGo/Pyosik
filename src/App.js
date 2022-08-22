import styles from './App.module.css';
import React from 'react';
import Animations from './Animations/Animations.module.css';
import Header from './Sections/Header/Header';
import Section from './Sections/Section';

function App() {
    return (
        <React.Fragment>
            <div className={`${styles.background} ${Animations.backgroundGradientmove}`}>
                <Header/>
                <Section/>
            </div>
        </React.Fragment>
    );
}

export default App;
