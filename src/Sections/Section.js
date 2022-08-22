import styles from './Section.module.css';
import React from 'react'

import Animations from '../Animations/Animations.module.css';

const Section = () => {
    return (<React.Fragment>
        <main className={`${styles.Section}`}>
            <h1 className={styles.title}>Pyosik</h1>
        </main>
    </React.Fragment>);
}

export default Section;