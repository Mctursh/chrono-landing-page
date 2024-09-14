import classNames from 'classnames'
import React, { FC, PropsWithChildren } from 'react'

interface DottedBorderProp extends PropsWithChildren {
    className?: string,
    variant?: 'green' | 'dark'
}

const DottedBorder: FC<DottedBorderProp> = ({ className = '', variant = "green" }) => {
  return (
    <div className={classNames(`${variant === 'green' ? 'bg-green-dotted' : 'bg-dark-dotted'} bg-repeat-y bg-cover`, className)}></div>
  )
}

export default DottedBorder