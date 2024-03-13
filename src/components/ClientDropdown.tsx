import React, { useState, useEffect, useRef } from 'react';

export default function ClientDropdown() {
    const [enabled, setEnabled] = useState(true);
    const clientRef = useRef(null);

    useEffect(() => {
      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    });
  
    function handleShowMenu() {
      setEnabled(!enabled);
    }
  
    function handleOutsideClick(e) {
      if (clientRef.current && !clientRef.current.contains(e.target)) {
        setEnabled(true);
      }
    }
  
    return (
      <div className='col'>
        <button
          id='dropdownDefaultButton'
          data-dropdown-toggle='client-dropdown'
          className='info-text outline outline-1 outline-zinc-300 bg-white w-full rounded-lg mb-2 px-5 py-2.5 text-center inline-flex place-content-between items-center'
          type='button'
          onClick={handleShowMenu}
        >
          Select Client
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
          id='client-dropdown'
          className={`absolute z-10 ${
            enabled && 'hidden'
          } bg-white divide-y divide-gray-100 rounded-lg shadow`}
          ref={clientRef}
          onClick={handleShowMenu}
        >
          <ul
            className='py-2 info-text w-[140px]'
            aria-labelledby='dropdownDefaultButton'
          >
            <li>
              <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
                Client 1
              </a>
            </li>
            <li>
              <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
                Client 2
              </a>
            </li>
            <li>
              <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
                Client 3
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }