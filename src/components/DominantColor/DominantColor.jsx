
import styles from './DominantColor.module.css';
const DominantColor = ({dominantColor}) => {
    return (
        <div className={styles.dominantcolor}>
            DominantColor
            <h1 style={(dominantColor==='All colors are equal')?{color:`black`}:{color:`${dominantColor}`}}>{dominantColor}</h1>
        </div>
);
}

export default DominantColor;