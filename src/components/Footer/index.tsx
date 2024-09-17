import React from 'react'

const Footer = () => {
  return (
    <footer id='footer' className="flex justify-center mt-32 android:mt-16 w-full">
        <div className="flex items-center justify-center gap-x-20 android:gap-x-12 w-1/2">
            <a target='_blank' href='https://github.com/chrono' className="text-primary font-normal text-lg android:text-sm uppercase font-suisse">github</a>
            <a target='_blank' href='https://x.com/chrono' className="text-primary font-normal text-lg android:text-sm uppercase font-suisse">Twitter</a>
            <a target='_blank' href='https://github.com/chrono' className="text-primary font-normal text-lg android:text-sm uppercase font-suisse">Blog</a>
        </div>
    </footer>
  )
}

export default Footer