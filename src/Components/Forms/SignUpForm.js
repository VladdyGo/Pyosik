import Button from '../Buttons/Button';
import Input from '../Inputs/Input';

import styles from './Forms.module.css';
import React, {useState} from 'react';

import Animations from '../../Animations/Animations.module.css';

import {Link} from 'react-router-dom';


const SignUpForm = () => {
    const [filledForm,updateForm] = useState({Fullname:"",Email:"",Username:"",Password:""});

    const inputChangeHandler = (event) => {
        updateForm((state,props)=>{
           state[event.target.name]= event.target.value;
           return state;
        });
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log(filledForm);
    };

    return (
        <React.Fragment>
            <div className={styles.MainSection}>
                <div className={styles.title}>Sign Up</div>
                <form className={`${styles.Container} ${styles.Position}`} onSubmit={formSubmitHandler}>
                    <Input type={"text"} id={"FNInput"} name={"Fullname"} placeholder="Full Name" onChange={inputChangeHandler} />
                    <Input type={"text"} id={"EmailInput"} name={"Email"} onChange={inputChangeHandler}/>
                    <Input type={"text"} id={"UserNameInput"} name={"Username"} onChange={inputChangeHandler}/>
                    <Input type={"password"} id={"PasswordInput"} name={"Password"} onChange={inputChangeHandler}/>
                    <Button type="submit" label={"GO"}/>
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