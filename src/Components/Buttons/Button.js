import styles from './Button.module.css';

const Button = (props) => {
    return(
        <button className={styles.Button} type={"submit"}>
            <div>{props.label}</div>
        </button>
    );
}

export default Button;