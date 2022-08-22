import Button from '../Buttons/Button';
import Input from '../Inputs/Input';

import styles from './Forms.module.css';
import React from 'react';

import Animation from '../../Animations/Animations.module.css';
import {Link} from "react-router-dom";

const SignUpForm = () => {

    return (
        <React.Fragment>
            <div className={styles.MainSection}>
                <div className={styles.title}>Log In</div>
                <form className={`${styles.Container} ${styles.Position}`}>
                    <Input type={"text"} id={"UserNameInput"} name={"Username"}/>
                    <Input type={"text"} id={"PasswordInput"} name={"Password"}/>
                    <Button label={"GO"}/>
                    <div className={styles.Navigation}>
                        <Link to={'/SignUp'}>Sign up</Link>
                        <Link to={'*'}>Forgot password</Link>
                    </div>
                </form>
            </div>
            <div className={`${styles.SecondarySection} ${styles.invisible} ${Animation.backgroundGradientmove} ${Animation.secondarySectionMotion}`}/>
        </React.Fragment>);
};

export default SignUpForm;