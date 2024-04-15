import styles from './profile.module.css';
import '../../assets/css/1.css'
export default function Profile(){
    return (
        <div>
           <h1 className={`${styles.heading} heading`}>This is my Profile.</h1>
        </div>
    );
}