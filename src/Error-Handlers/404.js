import styles from './404.module.css';

const PageNotFound = () => {
    return (
        <main className={`${styles.Background}`}>
            <div className={styles.Positioning}>
                <h1 className={styles.Title}>4<p className={styles.letterDecoration}>0</p>4</h1>
                <p className={styles.ErrorDescription}>Ohh darn, the page is not yet here.</p>
            </div>
        </main>
    );
};

export default PageNotFound;