import { useState } from "react";


export function HelloWorld() {

    const [randomInteger, setRandomInteger] = useState(0);

    const handleClick = () => {
        const min = 0;
        const max = 100;
        const newRandVal = randNumber({startingNumber: randomInteger, min, max});
        setRandomInteger(newRandVal);
    }

    return (
    <div>
        <p>{"Hello World " + randomInteger}</p>
        <button onClick={handleClick}>Increase count</button>
    </div>);
}

type RandNumberParams = {
    startingNumber: number;
    min: number;
    max: number;
}

//Generates a random number given starting, min and max;
function randNumber({startingNumber, min, max}: RandNumberParams) {
    const finalVal = Math.ceil(Math.random() * max);
    
    console.log("RandNumber: ", startingNumber, min, max);

    return finalVal;
}
