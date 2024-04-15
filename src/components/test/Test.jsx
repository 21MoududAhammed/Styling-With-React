import styles from './test.module.css'
export default function Test(){
    return (
        <div className={`${styles.container} `}>
            <div className={`${styles.makeCenter} ${styles.hFull}`}>
                <h1>Hello</h1>
            </div>
        </div>
    );
}