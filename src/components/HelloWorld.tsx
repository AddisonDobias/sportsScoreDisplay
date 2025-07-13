import { useRef, useState } from "react";



export function HelloWorld() {
    
    // State setup
    const [randomInteger, setRandomInteger] = useState(0);
    const count = useRef(0);

    // Handle button click
    const handleClick = () => {
        const min = 0;
        const max = 100;
        const newRandVal = randNumber({startingNumber: randomInteger, min, max});
        setRandomInteger(newRandVal);
        count.current = count.current + 1;
    }

    return (
    <div>
        <p>{"Random Number: " + randomInteger}</p>
        <p>{"Count: " + count.current}</p>

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
