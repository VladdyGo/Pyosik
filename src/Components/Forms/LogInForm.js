import Button from '../Buttons/Button';
import Input from '../Inputs/Input';

import styles from './Forms.module.css';
import React, {useState} from 'react';

import Animation from '../../Animations/Animations.module.css';
import {Link, useNavigate} from "react-router-dom";

const SignUpForm = () => {
    const xhr = new XMLHttpRequest();
    const navigate = useNavigate();

    const [filledFormLI, updateFormLI] = useState({Username: "", Password: ""})

    const inputChangeHandler = (event) => {
        updateFormLI((state,props)=>{
           state[event.target.name] = event.target.value;
           return state;
        });
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        xhr.open('POST','http://localhost:3000/LogIn',true);
        xhr.setRequestHeader("Content-Type", "application/json");
        console.log(JSON.stringify(filledFormLI));
        xhr.send(JSON.stringify(filledFormLI));
        xhr.onload = () => {
            if (xhr.readyState === xhr.DONE && xhr.status === 200){
                alert(xhr.response);
            }
        };

    };

    return (
        <React.Fragment>
            <div className={styles.MainSection}>
                <div className={styles.title}>Log In</div>
                <form className={`${styles.Container} ${styles.Position}`}>
                    <Input type={"text"} id={"UserNameInput"} name={"Username"} onChange={inputChangeHandler} />
                    <Input type={"password"} id={"PasswordInput"} name={"Password"} onChange={inputChangeHandler}/>
                    <Button label={"GO"} onClick={formSubmitHandler}/>
                    <div className={styles.Navigation}>
                        <Link to={'/SignUp'}>Sign up</Link>
                        <Link to={'*'}>Forgot password</Link>
                    </div>
                </form>
            </div>
            <div
                className={`${styles.SecondarySection} ${styles.invisible} ${Animation.backgroundGradientmove} ${Animation.secondarySectionMotion}`}/>
        </React.Fragment>);
};

export default SignUpForm;