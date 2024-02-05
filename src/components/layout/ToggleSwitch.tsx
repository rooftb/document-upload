import React, { useState } from 'react'

export default function ToggleSwitch() {
    const [isChecked, setIsChecked] = useState(true);
  
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
  
    return (
      <>
        <label className='toggle-switch inline-flex cursor-pointer items-center'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            className='sr-only'
          />
  
          <span
            className={`slider flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
              isChecked ? 'bg-primary' : 'bg-[#CCCCCE]'
            }`}
          >
            <span
              className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
                isChecked ? 'translate-x-[28px]' : ''
              }`}
            ></span>
          </span>
        </label>
        <span className='info-text min-w-20'>
          Toggle {isChecked ? 'ON' : 'OFF'}
        </span>
      </>
    );
  }