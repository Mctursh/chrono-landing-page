import { motion, useInView } from "framer-motion"
import DottedBorder from "../Dotted"
import { useRef, useState } from "react";
import classNames from "classnames";

const SDKs = () => {
    const [activeTab, setActiveTab] = useState('ts')
    const tsCode = `import { initializeMint } from “@chronotokens/sdk”`.split(" ");
    const rustCode = `use chronotokens_sdk::initialize_mint;`.split(" ");
    const tsWordsToHighlight = ["{", "initializeMint", "}", '“@chronotokens/sdk”'];
    const rustWordsToHighlight = ['chronotokens_sdk::initialize_mint;']

    const pgRef = useRef(null);
    const inView = useInView(pgRef, { amount: 0.5, once: true})

  return (
    <section id="sdks" className="flex flex-col gap-y-6 mt-32 mb-40 iphone:mb-20 iphone:mt-16">
        <h3 className="font-neubit text-primary font-bold text-4xl phablet:text-3xl">SDKs</h3>
        <span className="font-normal text-white text-xl laptop:text-lg tablet:text-base phablet:text-sm">Forge the future of DeFi with time-warped tokens – evolve, decay, and speculate in a dynamic ecosystem where every second shapes your crypto destiny on Solana.</span>
        <div className="border-[2px] border-primary bg-green-bg h-[50vw] android:h-[60vw] iphone:h-[80vw] max-h-[650px] w-full px-12 ipad:px-8 android:px-4 grid-lines">
            <div className="flex gap-x-6 my-6 tablet:my-3 font-neubit">
                <button onClick={() => setActiveTab('ts')} className={classNames("flex gap-x-4 android:gap-0 text-dark font-bold text-3xl laptop:text-2xl tablet:text-xl android:text-lg uppercase", 
                    activeTab == 'ts' ? 'bg-white' : 'bg-primary'
                )}>
                    <DottedBorder className="w-[18px] laptop:w-[14px] tablet:w-[9px] android:w-[6px] h-[80%] ml-1 my-2 tablet:my-1" variant='dark'  />
                    <span className="py-4 laptop:py-2 tablet:py-0 android:px-2 android:pt-[3px] pr-4" >Typescript</span>
                </button>
                <button onClick={() => setActiveTab('rust')} className={classNames("flex gap-x-4 android:gap-0 text-dark font-bold text-3xl laptop:text-2xl tablet:text-xl android:text-lg uppercase", 
                    activeTab == 'rust' ? 'bg-white' : 'bg-primary'
                )}>
                    <DottedBorder className="w-[18px] laptop:w-[14px] tablet:w-[9px] android:w-[6px] h-[80%] ml-1 my-2 tablet:my-1" variant='dark'  />
                    <span className="py-4 laptop:py-2 tablet:py-0 android:px-2 android:pt-[3px] pr-5" >rust</span>
                </button>
            </div>
            <div ref={pgRef} className="border border-primary h-[75%] ipad:h-[70%] tablet:h-[75%] android:h-[65%] iphone:h-[75%] w-full bg-dark py-9 px-5 grid-lines android:overflow-y-auto">
                {activeTab == 'ts' && tsCode.map((el, i) => (
                    <motion.span
                    className="font-suisse text-white font-normal text-lg laptop:text-base tablet:text-sm android:text-xs android:text-nowrap"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{
                        duration: 0.25  ,
                        delay: i / 10,
                    }}
                    key={i}
                    style={{ color: tsWordsToHighlight.includes(el) ? "#FFC806" : "#ffffff" }}
                    >
                    {el}{" "}
                    </motion.span>
                ))}
                {activeTab == 'rust' && rustCode.map((el, i) => (
                    <motion.span
                    className="font-suisse text-white font-normal text-lg laptop:text-base tablet:text-sm android:text-xs android:text-nowrap"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: i / 10,
                    }}
                    key={i}
                    style={{ color: rustWordsToHighlight.includes(el) ? "#FFC806" : "#ffffff" }}
                    >
                    {el}{" "}
                    </motion.span>
                ))}
            </div>
            <div className="justify-between flex items-center">
                <a href="https://github.com" className="text-white text-2xl laptop:text-xl ipad:text-lg tablet:text-base android:text-sm font-bold uppercase font-neubit">go to github</a>
            </div>
        </div>
    </section>
  )
}

export default SDKs