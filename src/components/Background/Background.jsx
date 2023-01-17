
import styles from './Background.module.css';
const Background = ({rgbColor,changeColor}) => {
    return (
        <div onClick={changeColor} style={{ backgroundColor: `rgb(${rgbColor.red}, ${rgbColor.green}, ${rgbColor.blue})`}} className={styles.background}>
            BackGround
            <h1>Click on this Block</h1>
        </div>
);
}

export default Background;