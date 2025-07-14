import { useState, useEffect } from 'react';
import { exampleResponse } from './basketBallHelpers';
import { BasketballGameTile } from './BasketBallGameTile';

//Calls API endpoint and generates a BasketballGameTile component for each gameb
export function BasketBallInfo() {

    const [data, setData] = useState([]);


    //@ts-ignore
    useEffect(() => setData(exampleResponse.response), []); // Empty dependency array ensures this runs once on mount


    return (
        <div>
            {data.map((element: any) => {return (<BasketballGameTile key={element.id} gameData={element}/>)})}
        </div>
    );
}

export default BasketBallInfo;

