import React from 'react';
import AverageColor from '../AverageColor/AverageColor';
import Background from '../Background/Background';
import DominantColor from '../DominantColor/DominantColor';
import styles from './Palette.module.css';


const Palette = () => {
    const [rgbColor,setRgbColor] = React.useState({red:127,green:127,blue:127}); 
    const [averageColor,setAverageColor] = React.useState(rgbColor);
    const [dominantColor,setDominantColor] = React.useState(null);

    const [allColor,setAllColor] = React.useState([rgbColor]);

    const changeColor =()=>{
        const randN=()=> Math.floor(Math.random()*256);
        setRgbColor({red:randN(),green:randN(),blue:randN()});
    }

    React.useEffect(()=>{
        setAllColor([rgbColor,...allColor]);
        
    },[rgbColor]);

    React.useEffect(()=>{
        findEverage();
    },[allColor]);
    
    const findEverage = () =>{
        let average ={red:0,green:0,blue:0};
        let dominantKey;
        let dominant=0;
        allColor.forEach((elem)=>{
            average.red =average.red + elem.red;
            average.green =average.green + elem.green;
            average.blue =average.blue + elem.blue;
        });
        for(let key in average){
            average[key] = Math.floor(average[key]/allColor.length);
            if(average[key]>dominant){
                dominant = average[key];
                dominantKey = key;
            }
        }

        ((average.red===average.blue)&&(average.green===average.blue)) ? setDominantColor('All colors are equal') : setDominantColor(dominantKey);
        setAverageColor(average);
    }

    return (
        <div>
            <AverageColor averageColor={averageColor}/>
            <Background changeColor={changeColor} rgbColor={rgbColor}/>
            <DominantColor dominantColor={dominantColor}/>
        </div>
);
}


export default Palette;