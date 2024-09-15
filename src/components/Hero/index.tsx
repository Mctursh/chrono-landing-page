import { useEffect, useState } from 'react'
import DottedBorder from '../Dotted'

const Hero = () => {
  const [date, setDate] = useState<Date>(new Date())
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [])


  const formatTime = (time: Date) => {
    const day = String(time.getDate()).padStart(2, '0');
    const month = String(time.getMonth() + 1).padStart(2, '0');
    const year = String(time.getFullYear()).slice(-2);
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');

    return `${day}/${month}/${year}/${hours}:${minutes}:${seconds}`;
  };
  
  return (
    <div>
        <div className="flex justify-center items-center mb-6">
            <h1 className="font-neubit text-primary px-4 py-3 bg-green-bg border border-primary font-bold text-7xl">HACKATHON</h1>
        </div>
        <div className="flex flex-col">
            <p className="text-primary font-bold text-4xl mb-1 tracking-widest font-neubit">{formatTime(date)}</p>
            <div className="border border-primary px-16 pt-4 pb-12 w-100 relative">
                <img className='object-cover breathing-title' src="timeline1.svg" alt="timeline" />
                <img src='x.svg' alt='x icon' className='absolute right-0 top-0 p-4 bg-green-bg color-primary font-bold text-4xl text-white' />
            </div>
            <div className='flex z-10 justify-center translate-y-[-40%]' >
              <div className="h-fit bg-green flex w-[95%] justify-center">
                  <DottedBorder className="w-[24px] h-auto min-h-[15px] ml-1 my-1"  />
                  <div className="flex flex-col ml-4">
                    <p className="text-primary font-normal text-2xl w-3/4">Forge the future of DeFi with time-warped tokens – evolve, decay, and speculate in a dynamic ecosystem where every second shapes your crypto destiny on Solana.</p>
                    <div className="justify-end flex bg-primary w-fit ml-auto">
                      <DottedBorder className="w-[12px] h-auto ml-1 my-1" variant='dark'  />
                      <p className="text-dark font-bold text-2xl tracking-widest p-3">SWAP TOKENS</p>
                    </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero