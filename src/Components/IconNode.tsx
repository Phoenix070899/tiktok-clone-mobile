import React, { ReactNode } from 'react'

interface IIconNodeProps {
    icon: ReactNode;
    detail?: string;
    onClick?: () => void;
    isActive?: boolean;
}

function IconNode({icon, detail, onClick, isActive} : IIconNodeProps) {
  return (
    <div className='flex flex-col items-center' onClick={onClick}>
        {icon}
        <span className='text-xs mt-1'>{detail}</span>
    </div>
  )
}

export default IconNode