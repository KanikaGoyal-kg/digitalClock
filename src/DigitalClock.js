import React, { useState } from 'react';

const DigitalClock = () => {

    let Time = new Date().toLocaleTimeString();

    const [currentTime, setCurrentTime] = useState(Time);

    const updateTime = () => {
        Time = new Date().toLocaleTimeString();
        setCurrentTime(Time);
    }

    setInterval(updateTime, 1000)

    return(
        <div style={{display: 'flex', backgroundColor: 'antiquewhite', justifyContent: 'center', alignItems: 'center', paddingTop: '15%', fontSize: '50px'}}>
        <h1>{currentTime}</h1>
        </div>
    )
}

export default DigitalClock;