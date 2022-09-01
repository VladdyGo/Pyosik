import styles from './App.module.css';
import React from 'react';
import Animations from './Animations/Animations.module.css';
import Header from './Sections/Header/Header';
import Body from './Sections/Body/Body';

function App() {
    return (
        <React.Fragment>
            <div className={`${styles.background} ${Animations.backgroundGradientmove}`}>
                <Header/>
                <Body/>
            </div>
        </React.Fragment>
    );
}

export default App;
