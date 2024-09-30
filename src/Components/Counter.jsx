import React, { useState, useEffect } from 'react';

const Counters = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCount1(prevCount => prevCount < 50 ? prevCount + 1 : 50);
    }, 30);

    const interval2 = setInterval(() => {
      setCount2(prevCount => prevCount < 20 ? prevCount + 1 : 20);
    }, 30);

    const interval3 = setInterval(() => {
      setCount3(prevCount => prevCount < 80 ? prevCount + 1 : 80);
    }, 30);

    const interval4 = setInterval(() => {
      setCount4(prevCount => prevCount < 10 ? prevCount + 1 : 10);
    }, 30);

    // Clear intervals when component unmounts
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, []);

  return (
    <div className="counters flex justify-between space-y-4 md:px-10 mt-10 text-sm md:text-2xl m-2">

      <h2 className="   mt-4 flex flex-col items-center border-r-2 pr-8 md:pr-40 ">
         <span>Over</span>
         <h1 className="font-bold">{count1}+</h1>
         
         <span className=''>Happy </span>
         <span className='font-bold'> Clients</span>
         
         
         </h2>
      <h2 className=" flex flex-col items-center border-r-2  pr-8 md:pr-40">
         <span>Over</span>
         <h1 className="font-bold">{count2}+</h1>
         <span>Houses</span>
         <span className='font-bold'>Sold Out</span>
         
         
         </h2>
      <h2 className="  flex flex-col items-center border-r-2   pr-8 md:pr-40">
         <span>Over</span>
         <h1 className="font-bold">{count3}+</h1>
         <span>Houses</span>
         <span className='font-bold'>Rented Out</span>
         
         
         </h2>
      <h2 className=" flex flex-col items-center ">
         <span>Over</span>
         <h1 className="font-bold">{count4}+</h1>
         <span>Lands</span>
         <span className='font-bold'>Sold Out</span>
         
         
         </h2>
    </div>
  );
};

export default Counters;
