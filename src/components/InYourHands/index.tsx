import UseSectionHeader from '../../hooks/useSectionHeader'
import DottedBorder from '../Dotted'

const InYourHands = () => {
  return (
    <section id='in_your_hands' className='my-40 android:mt-20'>
        <UseSectionHeader text='IN YOUR HANDS////' />
        <div className="grid grid-cols-2 tablet:flex tablet:flex-col order-[-1] tablet:gap-y-8">
            <div className="tablet:order-1 flex flex-col gap-y-12 laptop:gap-y-8 android:gap-y-4 pr-40 laptop:pr-28 ipad:pr-16 tablet:pr-0 justify-center">
                <p className="font-neubit text-primary font-bold text-4xl ipad:text-3xl phablet:text-2xl uppercase">TIMEWARE WALLET</p>
                <span className="font-normal text-white text-xl laptop:text-lg ipad:text-base phablet:text-sm">Forge the future of DeFi with time-warped tokens – evolve, decay, and speculate in a dynamic ecosystem where every second shapes your crypto destiny on Solana.</span>
                <button className="flex bg-primary w-full ipad:w-[80%] tablet:w-full mt-12 ipad:mt-6 relative">
                    <div className="h-[60%] w-[20px] bg-primary absolute right-[-3%] tablet:right-[-2%] top-[20%]"></div>
                    <DottedBorder className="w-[3%] ipad:h-[85%] h-[90%] tablet:w-[2%] phablet:w-[3.5%] tablet:h-[40px] tablet:mb-1 tablet:my-0 tablet:mt-1 ml-1 my-1" variant='dark'  />
                    <p className="text-dark font-bold text-5xl p-3 pb-[7px] laptop:text-4xl ipad:text-3xl laptop:p-2 laptop:pb-[3px] ipad:pb-1 text-nowrap mx-auto font-neubit">DOWNLOAD TIMEWARE</p>
                </button>
            </div>
            <div className="grid-lines tablet:col-span-2">
                <div className="border-[2px] border-primary bg-green-bg h-[50vw] laptop:h-[45vw] ipad:h-[40vw] tablet:h-[60vw] phablet:h-[80vw] max-h-[650px] w-full px-12 pt-12 laptop:p-8 android:p-6 relative">
                    <div className="border border-primary h-[92%] laptop:h-[100%] w-full bg-dark grid-lines"></div>
                    <div className="justify-between flex items-center">
                        <span className="text-white text-2xl laptop:text-lg ipad:text-base font-bold uppercase font-neubit">TIMEPIECE</span>
                        <span className="text-white text-2xl laptop:text-lg ipad:text-base font-bold uppercase font-neubit">TIME IS MONEY</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default InYourHands