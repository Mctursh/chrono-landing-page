import React from 'react'
import DottedBorder from '../Dotted'

const Hero = () => {
  return (
    <div className='' >
        <div className="flex justify-center items-center mb-12">
            <h1 className="text-primary px-4 py-3 bg-green-bg border border-primary font-bold text-5xl">HACKATHON</h1>
        </div>
        <div className="flex flex-col">
            <p className="text-primary font-bold text-2xl mb-1 tracking-widest">01/08/09/14:00:54</p>
            <div className="border border-primary px-16 pt-16 pb-32 w-100 relative">
                <img src="timeline.svg" alt="timeline" />
                <img src='x.svg' alt='x icon' className='absolute right-0 top-0 p-4 bg-green-bg color-primary font-bold text-4xl text-white' />
            </div>
            <div className='flex z-10 justify-center translate-y-[-40%]' >
              <div className="h-fit bg-green flex w-[95%] justify-center">
                  <DottedBorder className="w-[24px] h-auto min-h-[15px] ml-1 my-1"  />
                  <div className="flex flex-col ml-4">
                    <p className="text-primary font-normal text-2xl w-3/4">Forge the future of DeFi with time-warped tokens – evolve, decay, and speculate in a dynamic ecosystem where every second shapes your crypto destiny on Solana.</p>
                    
                    <div className="justify-end flex bg-primary w-fit ml-auto">
                      <DottedBorder className="w-[8px] h-auto ml-1 my-1" variant='dark'  />
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