import { useState } from "react"
import { faqs } from "../../utils/mock"
import DottedBorder from "../Dotted"
import classNames from "classnames"


const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState<Number>(-1)
    const handleToggle = (idx: number) => {
        setActiveIndex(prev => prev === idx ? -1 : idx)
    }
  return (
    <section id="faqs" className="flex flex-col gap-y-2 mt-32 mb-40 phablet:mb-20">
        <h3 className="font-neubit text-primary font-bold text-6xl uppercase desktop-mini:text-[3.5em] desktop-midi:text-[3.25em] laptop:text-[2.7em] ipad:text-[1.8em] phone:text-[1.5em] android:text-[1.1em] phablet:text-[1em]"><span className="text-white">BITCOIN </span> ALLOWED YOU TO CONVERT <span className="text-white">ENERGY</span> TO INSTANT MONEY</h3>
        <h3 className="font-neubit text-primary font-bold text-6xl uppercase desktop-mini:text-[3.5em] desktop-midi:text-[3.25em] laptop:text-[2.7em] ipad:text-[1.8em] phone:text-[1.5em] android:text-[1.1em] phablet:text-[1em]"><span className="text-white">TIMELINE</span> ALLOWED YOU TO CONVERT <span className="text-white">TIME</span> TO INSTANT MONEY</h3>
        <div className="justify-start flex bg-primary w-full mt-6">
            <DottedBorder className="w-[1%] min-w-[16px] phablet:min-w-[13px] phablet:mr-1 h-auto ml-1 my-1" variant='dark'  />
            <p className="text-dark font-bold text-4xl laptop:text-3xl p-3 android:p-1 android:text-2xl font-neubit">USE CASES</p>
        </div>
        
        <div className="flex flex-col mt-4">
            {faqs.map((faq, idx) => {
                return <div key={idx} className={classNames(
                    "border-b border-primary bg-faq-green px-6 scroll-down-ease",
                    activeIndex == idx ? 'h-[237px] ipad:h-[200px] android:h-[230px]' : 'laptop:h-[80px] h-[99px] ipad:h-[73px]'
                    )}>
                <div className="flex justify-between items-center">
                    <p className={classNames(
                        "text-white font-normal text-xl laptop:text-lg ipad:text-base phablet:text-sm font-suisse",
                        activeIndex === idx && 'py-6'
                    )}>{faq.question}</p>
                    {activeIndex !== idx && <button onClick={() => handleToggle(idx)} className="flex border border-primary w-fit my-4">
                        <DottedBorder className="w-[13px] laptop:w-[8px] h-[55px] laptop:h-[30px] ml-1 my-1" variant='green'  />
                        <p className="text-primary font-bold text-4xl laptop:text-2xl p-3 laptop:p-1 laptop:pl-2 font-neubit">EXPAND</p>
                    </button>}
                </div>
                {
                    activeIndex === idx &&  <div className="flex flex-col pb-4">
                    <p className={classNames(
                        "text-white font-normal text-xl laptop:text-lg ipad:text-base tablet:text-sm phablet:text-[12px]",
                        
                    )}>{faq.answer}</p>
                    <button onClick={() => handleToggle(idx)} className="self-end flex bg-primary w-fit mt-6">
                        <DottedBorder className="w-[1%] w-[16px] laptop:w-[8px] h-[55px] laptop:h-[30px] h-[55px] ml-1 my-1" variant='dark'  />
                        <p className="text-dark font-bold text-4xl laptop:text-2xl p-3 laptop:p-1 laptop:pl-2 font-neubit">REDUCE</p>
                    </button>
                </div>
                }
            </div>
            })}
            
        </div>
    </section>
  )
}

export default FAQs
