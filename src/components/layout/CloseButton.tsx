import React from 'react'

export default function CloseButton() {
    return (
      <button
        type='button'
        className='bg-primary rounded-md m-1 p-2 h-10 w-10 items-center left-0 justify-start text-white'
      >
        <span className='sr-only'>Close menu</span>
        <svg
          className='h-6 w-6'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </button>
    );
  }
