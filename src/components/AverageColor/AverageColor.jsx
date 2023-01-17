
import styles from './AverageColor.module.css';
const AverageColor = ({averageColor}) => {
    return (
        <div className={styles.averagecolor}>
            AverageColor
            <h1>red:{averageColor.red}, green:{averageColor.green}, blue:{averageColor.blue}</h1>
        </div>
);
}


export default AverageColor;