import React from 'react'
import ClientDropdown from './ClientDropdown';

interface TestingCenterProps {
    centerNumber: number;
}  

export default function TestingCenter({centerNumber}: TestingCenterProps) {
    return (
      <div className='inline-flex align w-full my-1 items-center justify-between'>
        <span className='info-text'>
          Testing Center{' '}
          <span className='font-sans font-extralight'>{ centerNumber }</span>
        </span>
        <div className='inline-flex items-center gap-x-3'>
          <ClientDropdown />
          <svg
            className='clock-icon'
            xmlns='http://www.w3.org/2000/svg'
            width='1.5em'
            height='1.5em'
            viewBox='0 0 24 24'
          >
            <path
              fill='none'
              stroke='#1c3e6e'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1'
              d='M12 8v4l3 3m6-3a9 9 0 1 1-18 0a9 9 0 0 1 18 0'
            />
          </svg>
        </div>
      </div>
    );
  }