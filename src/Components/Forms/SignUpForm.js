import Button from '../Buttons/Button';
import Input from '../Inputs/Input';

import styles from './Forms.module.css';
import React, {useState} from 'react';

import Animations from '../../Animations/Animations.module.css';

import {Link,useNavigate} from 'react-router-dom';

const SignUpForm = () => {
    const xhr = new XMLHttpRequest();
    const navigate = useNavigate();


    const [filledForm,updateForm] = useState({Fullname:"",Email:"",Username:"",Password:""});
    //https://servpyo.herokuapp.com/

    const inputChangeHandler = (event) => {
        updateForm((state,props)=>{
           state[event.target.name]= event.target.value;
           return state;
        });
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        xhr.open("POST",'http://localhost:3000/SignUp',true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(filledForm));
        xhr.onload = () => {
            if (xhr.readyState === xhr.DONE && xhr.status === 200) {
                if(xhr.response === 'Added'){
                    alert('The user was added !');
                    navigate('../LogIn');
                }else if(xhr.response === 'Exists'){
                    alert('Error such a user already exists !');
                }
            }
        };
    };

    return (
        <React.Fragment>
            <div className={styles.MainSection}>
                <div className={styles.title}>Sign Up</div>
                <form className={`${styles.Container} ${styles.Position}`}>
                    <Input type={"text"} id={"FNInput"} name={"Fullname"} placeholder="Full Name" onChange={inputChangeHandler} />
                    <Input type={"text"} id={"EmailInput"} name={"Email"} onChange={inputChangeHandler}/>
                    <Input type={"text"} id={"UserNameInput"} name={"Username"} onChange={inputChangeHandler}/>
                    <Input type={"password"} id={"PasswordInput"} name={"Password"} onChange={inputChangeHandler}/>
                    <Button type="button" label={"GO"} onClick={formSubmitHandler}/>
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