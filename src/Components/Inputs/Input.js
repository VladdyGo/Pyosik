import styles from './Input.module.css';

const Input = (props) => {
    return(
        <input className={`${styles.Input} ${styles.text}`} type={props.type} id={props.id} name={props.name} placeholder={props.name}/>
    )
};

export default Input;