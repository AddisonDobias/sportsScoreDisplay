import { useRef, useState } from "react";
import styles from './HelloWorld.module.css';

export function HelloWorld() {
    
    const [randomInteger, setRandomInteger] = useState(0);

    const isInCacheArr = useRef(false);
    const cacheArray = useRef<number[]>([]);

    const isInCacheMap = useRef(false);
    const cacheMap = useRef<Record<number, boolean>>({});

    // Handle button click
    const handleClick = () => {

        //Generates a new random number to be set as randomInteger
        const max = 100;
        const newRandVal = randNumber(max);
        
        //Checks if newRandVal has been seen before
        isInCacheArr.current = isInCachedArray(cacheArray.current, newRandVal);
        isInCacheMap.current = isInCachedMap(cacheMap.current, newRandVal);

        //Sets state causing re-render
        setRandomInteger(newRandVal);
    }


    return (
        <div className={styles.container}>
            <h1>Hello World</h1>
            <h3>{"Random Number: " + randomInteger}</h3>
            <p style={isInCacheArr.current ? {color: 'green'} : {color: 'red'}}>
                {"Cache Array"}
            </p>
            <p style={isInCacheMap.current ? {color: 'green'} : {color: 'red'}}>
                {"Cache Map"}
            </p>            
            <button onClick={handleClick}>Increase count</button>
        </div>
    );
}

//Takes in an map of previously seen cached values and returns if exists or adds it
function isInCachedMap(cacheMap: Record<number, boolean>, numberToFind: number) {

    //Check if record exists in hashmap
    if (cacheMap[numberToFind]){
        return true;
    }

    //Adds to the cacheMap
    cacheMap[numberToFind] = true;

    //Returns false
    return false;

}

//Takes in an array of previously seen cached values and returns if exists or adds it
function isInCachedArray(cacheArray: number[], numberToFind: number) {

    // See if numberToFind is in cacheArray
    for (let i = 0; i < cacheArray.length; i++) {
    
        // If it is return true
        if(numberToFind === cacheArray[i])  {
            return true;
        }
    
    }

    // If not add it to the array
    cacheArray.push(numberToFind);

    // Return false
    return false;
}


//Generates a random number given starting, min and max;
function randNumber(max: number) {
    const finalVal = Math.ceil(Math.random() * max);
    return finalVal;
}
