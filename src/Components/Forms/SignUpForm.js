import Button from '../Buttons/Button';
import Input from '../Inputs/Input';

import styles from './Forms.module.css';
import React from 'react';

import Animations from '../../Animations/Animations.module.css';

import {Link} from 'react-router-dom';


const SignUpForm = () => {

    return (
        <React.Fragment>
            <div className={styles.MainSection}>
                <div className={styles.title}>Sign Up</div>
                <form className={`${styles.Container} ${styles.Position}`}>
                    <Input type={"text"} id={"FNInput"} name={"Full name"} placeholder="Full Name"/>
                    <Input type={"text"} id={"EmailInput"} name={"Email"}/>
                    <Input type={"text"} id={"UserNameInput"} name={"Username"}/>
                    <Input type={"text"} id={"PasswordInput"} name={"Password"}/>
                    <Button label={"GO"}/>
                    <div className={styles.Navigation}>
                        <Link to={'/LogIn'}>Log In</Link>
                        <Link to={'/'}>Home page</Link>
                    </div>
                </form>
            </div>
            <div className={`${styles.SecondarySection} ${styles.invisible} ${Animations.backgroundGradientmove} ${Animations.secondarySectionMotion}`}/>
        </React.Fragment>);
};

export default SignUpForm;