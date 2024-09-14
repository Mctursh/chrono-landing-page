import DottedBorder from "../Dotted"

const SDKs = () => {
  return (
    <section id="sdks" className="flex flex-col gap-y-6 mt-32 mb-40">
        <h3 className="font-neubit text-primary font-bold text-4xl">SDKs</h3>
        <span className="font-normal text-white text-xl">Forge the future of DeFi with time-warped tokens – evolve, decay, and speculate in a dynamic ecosystem where every second shapes your crypto destiny on Solana.</span>
        <div className="border-[2px] border-primary bg-green-bg h-[50vw] max-h-[650px] w-full px-12">
            <div className="flex gap-x-6 my-6 font-neubit">
                <button className="flex gap-x-4 text-dark bg-white font-bold text-3xl uppercase">
                    <DottedBorder className="w-[18px] h-[80%] ml-1 my-2" variant='dark'  />
                    <span className="py-4 pr-4" >Typescript</span>
                </button>
                <button className="flex gap-x-4 text-dark bg-primary font-bold text-3xl uppercase">
                    <DottedBorder className="w-[18px] h-[80%] ml-1 my-2" variant='dark'  />
                    <span className="py-4 pr-5" >rust</span>
                </button>
            </div>
            <div className="border border-primary h-[75%] w-full bg-dark py-9 px-5">
                <p className="font-suisse text-white font-normal text-lg">import &nbsp; <span className="text-yellow">{`{   initializeMint   }`}</span>&nbsp; &nbsp; from &nbsp; <span className="text-yellow">“@chronotokens/sdk”</span></p>
            </div>
            <div className="justify-between flex items-center">
                <a href="https://github.com" className="text-white text-2xl font-bold uppercase font-neubit">go to github</a>
            </div>
        </div>
    </section>
  )
}

export default SDKs