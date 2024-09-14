import DottedBorder from '../Dotted'

const Launchpad = () => {
  return (
    <section id='launchpad' className='my-40'>
        <div className='flex justify-center mb-24'>
            <img src="launchpad.svg" alt="launchpad header" />
        </div>
        <div className="grid grid-cols-2">
            <div className="flex flex-col gap-y-12 pr-40 justify-center">
                <p className="font-neubit text-primary font-bold text-4xl uppercase">GENESIS</p>
                <span className="font-normal text-white text-xl">Forge the future of DeFi with time-warped tokens – evolve, decay, and speculate in a dynamic ecosystem where every second shapes your crypto destiny on Solana.</span>
                <div className="flex bg-primary w-full mt-12 relative">
                    <div className="h-[60%] w-[20px] bg-primary absolute right-[-3%] top-[20%]"></div>
                    <DottedBorder className="w-[3%] h-auto ml-1 my-1" variant='dark'  />
                    <p className="font-neubit text-dark font-bold text-5xl p-3 mx-auto">LAUNCH ON GENESIS</p>
                </div>
            </div>
            <div className="">
                <div className="border-[2px] border-primary bg-green-bg h-[50vw] max-h-[650px] w-full px-12 pt-12">
                    <div className="border border-primary h-[92%] w-full bg-dark "></div>
                    <div className="justify-between flex items-center">
                        <span className="text-white text-2xl font-bold uppercase font-neubit">WHERE DID THE MEME START?</span>
                        <span className="text-white text-2xl font-bold uppercase font-neubit">TEST HERE</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Launchpad