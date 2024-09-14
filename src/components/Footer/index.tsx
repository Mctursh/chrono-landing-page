import React from 'react'

const Footer = () => {
  return (
    <footer id='footer' className="flex justify-center mt-32 mb-40 w-full">
        <div className="flex items-center justify-center gap-x-20 w-1/2">
            <a target='_blank' href='https://github.com/chrono' className="text-primary font-normal text-lg uppercase font-suisse">github</a>
            <a target='_blank' href='https://x.com/chrono' className="text-primary font-normal text-lg uppercase font-suisse">Twitter</a>
            <a target='_blank' href='https://github.com/chrono' className="text-primary font-normal text-lg uppercase font-suisse">Blog</a>
        </div>
    </footer>
  )
}

export default Footer