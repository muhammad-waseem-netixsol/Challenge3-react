import React, { useState, useEffect } from 'react';
import Error from './Error-Modal';
import Button from './Button';
import "./Random.css";
const Random = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [error, setError] = useState(false);
  // function to fecth
  const fetchRandomNumber = async () => {
    fetch('https://resp-api-5x1z.vercel.app/api/random').then(resp => resp.json()).then(data => {
      setRandomNumber(data.randomNumber);
      setError(false);
    }).catch(err => {
      setError(true);
      console.log(err)
    });
  }
// use effect to check number and decrease it by every second...
  useEffect(() => {
    const interval = setInterval(() => {
      if (randomNumber !== null && randomNumber >= 1) {
        setRandomNumber(prevNumber => prevNumber - 1);
      } else if (randomNumber !== null && randomNumber < 1) {
        fetchRandomNumber();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [randomNumber]);
  // effect to call end point for the first time....
  useEffect(() => {
    fetchRandomNumber();
  }, []);
  // in case of error call api again
  const tryAgainHandler = () => {
    console.log("fetch again")
    fetchRandomNumber();
  };

  return <>
  {error && <Error />}
  {error && <Button callApiAgain={tryAgainHandler}/>}
  {!error && <div className="h-[300px] w-[300px] rounded-2xl grad flex justify-center items-center text-white ">
    {randomNumber}
  </div>}
  
  </>
};

export default Random;
