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
            <h1 className="font-neubit text-primary px-4 py-3 bg-secondary border border-primary font-bold text-7xl laptop:text-6xl ipad:text-5xl ipad:py-2 ipad:pb-1 tablet:text-4xl phone:py-1 phone:pb-[2px] android:px-2 android:pt-[2px] android:pb-0 android:text-3xl phablet:text-2xl">HACKATHON</h1>
        </div>
        <div className="flex flex-col">
            <p className="text-primary font-bold text-4xl laptop:text-3xl ipad:text-2xl phone:text-xl android:text-lg phablet:text-base ipad:mb-0 mb-1 tracking-widest font-neubit">{formatTime(date)}</p>
            <div className="border border-primary px-16 android:px-6 phablet:px-4 pt-4 pb-12 w-100 relative">
                <img className='object-cover breathing-title w-full' src="timeline1.svg" alt="timeline" />
                <img src='x.svg' alt='x icon' className='absolute right-0 top-0 p-4 ipad:p-2 phablet:p-[6px] bg-secondary color-primary font-bold text-4xl text-white ipad:w-[30px] android:w-[25px] phablet:w-[20px]' />
            </div>
            <div className='flex z-10 justify-center translate-y-[-40%]' >
              <div className="h-fit bg-[#033d2f] flex w-[95%] justify-center relative">
                  <DottedBorder className="w-[2%] min-w-[20px] ipad:w-[1.5%] ipad:min-w-[14px] phone:min-w-[10px] phablet:min-w-[8px] h-auto min-h-[15px] ml-1 my-1"  />
                  <div className="flex flex-col ml-4 android:ml-2 phablet:ml-1 grow">
                    <p className="text-primary font-neubit font-normal text-6xl laptop:text-5xl ipad:text-4xl phone:text-3xl android:text-2xl phablet:text-xl w-[80%] mr-auto leading-[70px]">Mint the moment, monetize attention, own your time on Solana.</p>
                    <div className="justify-end flex bg-primary w-fit ml-auto absolute bottom-0 right-0">
                      <DottedBorder className="w-[12px] laptop:w-[9px] phone:w-[6px] h-auto ml-1 my-1" variant='dark'  />
                      <p className="text-dark font-bold text-4xl laptop:text-3xl ipad:text-2xl phone:text-lg android:text-base phablet:text-sm phone:tracking-[5px] android:tracking-[3px] tracking-[7px] p-3 laptop:p-1 android:pt-[1px] ipad:p-[2px] laptop:pl-2 ipad:pl-2 phone:pb-0 phone:mt-[1px] font-neubit">SWAP TOKENS</p>
                    </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero