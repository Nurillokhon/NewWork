import React ,{useState , useEffect}from 'react';

const Time = () => {
    const [time, setTime] = useState()
    useEffect(() => {
        setInterval(() => {
          Times()
        }, 1000);
        
      }, [time]);
      function Times() {
        const now = new Date();
        const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false, timeZone: 'Europe/Berlin' };
        const currentTime = now.toLocaleTimeString('en-US', options)
        setTime(currentTime)
      }
    return (
        <div>
            <p>{time}</p>
        </div>
    );
}

export default Time;
