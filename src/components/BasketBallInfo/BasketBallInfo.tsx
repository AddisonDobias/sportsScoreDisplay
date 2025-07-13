import { useState, useEffect } from 'react';
import { exampleResponse } from './exampleResponse';
import { BasketballGameTile } from './BasketBallGameTile';

//Calls API endpoint and generates a BasketballGameTile component for each gameb
export function BasketBallInfo() {

    const [data, setData] = useState([]);


    //@ts-ignore
    useEffect(() => setData(exampleResponse.response), []); // Empty dependency array ensures this runs once on mount


    return (
        <div>
            {data.map((element) => {return (<BasketballGameTile gameData={element}/>)})}
        </div>
    );
}

export default BasketBallInfo;

