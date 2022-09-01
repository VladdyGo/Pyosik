import styles from './Body.module.css';
import React from 'react'
import boxerDoggo from '../../Images/BoxerDoggo.jpg';

import Animations from '../../Animations/Animations.module.css';

const Body = () => {
    return (<React.Fragment>
        <main className={`${styles.Section}`}>
            <h1 className={styles.title}>Pyosik</h1>
            <img className={styles.mainPageIcon} src={boxerDoggo}></img>

        </main>
    </React.Fragment>);
}

export default Body;