import { FC, PropsWithChildren } from "react";
import { useScramble } from "use-scramble";

interface SectionnHeaderProps extends PropsWithChildren {
    text: string
}


const UseSectionHeader: FC<SectionnHeaderProps> = ({ text }) => {
    const { ref, replay } = useScramble({ 
      text
    });

  return (
    <div className='flex justify-center mb-24 relative w-fit mx-auto'>
        <h2 ref={ref} className='font-neubit font-bold text-6xl text-white uppercase' />
        <div onMouseOver={replay} 
            onFocus={replay} className="absolute h-full w-full bg-text-gradient top-[0] overflow-hidden"></div>
    </div>
  )
}

export default UseSectionHeader