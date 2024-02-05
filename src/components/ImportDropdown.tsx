import React, { useState } from 'react';

export default function ImportDropdown() {
    const [enabled, setEnabled] = useState(true);
  
    function handleShowMenu() {
      setEnabled(!enabled);
    }
  
    return (
      <>
        <button
          id='dropdownDefaultButton'
          data-dropdown-toggle='dropdown'
          className='primary-text outline outline-1 outline-zinc-300 bg-white w-full rounded-lg mb-2 px-5 py-2.5 text-center inline-flex place-content-between items-center'
          type='button'
          onClick={handleShowMenu}
        >
          Select Import Name:
          <svg
            className='content-end w-2.5 h-2.5 ms-3'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 10 6'
          >
            <path
              stroke='black'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m1 1 4 4 4-4'
            />
          </svg>
        </button>
        <div
          id='import-dropdown'
          className={` absolute z-10 ${
            enabled && 'hidden'
          } bg-white divide-y divide-gray-100 rounded-lg shadow`}
        >
          <ul
            className='py-2 text-primary font-primary text-sm w-[525px]'
            aria-labelledby='dropdownDefaultButton'
          >
            <li>
              <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
                Import Title 1
              </a>
            </li>
            <li>
              <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
                Import Title 2
              </a>
            </li>
            <li>
              <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
                Import Title 3
              </a>
            </li>
            <li>
              <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
                Import Title 4
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }