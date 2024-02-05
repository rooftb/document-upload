import React from 'react'

export default function FileProgress() {
    return (
      <>
        <hr className='h-0.5 my-3 w-100 bg-gray-200' />

        <div className='file-progess flex items-center gap-x-3 mx-2'>
          <svg className='w-7 h-7 m-1' viewBox='0 0 1024 1024'>
            <path
              d='M554.666667 384h234.666666L554.666667 149.333333V384M256 85.333333h341.333333l256 256v512a85.333333 85.333333 0 0 1-85.333333 85.333334H256a85.333333 85.333333 0 0 1-85.333333-85.333334V170.666667c0-47.36 37.973333-85.333333 85.333333-85.333334m0 768h512v-341.333333l-170.666667 170.666667-85.333333-85.333334-256 256M341.333333 384a85.333333 85.333333 0 0 0-85.333333 85.333333 85.333333 85.333333 0 0 0 85.333333 85.333334 85.333333 85.333333 0 0 0 85.333334-85.333334 85.333333 85.333333 0 0 0-85.333334-85.333333z'
              fill='orange'
            />
          </svg>
          <div>
            <div className='inline-flex align w-full gap-x-10 mb-1 place-content-between'>
              <p className='text-sm text-lightgray font-secondary'>
                WN<span className='font-sans font-extralight'>-</span>DAL
                <span className='font-sans font-extralight'>-</span>0726
                <span className='font-sans font-extralight'>-</span>
                NH20166.CSV
              </p>
              <span className='text-xs font-extralight'>5.7MB</span>
            </div>
            <div className='flex w-[460px] items-center gap-x-3 whitespace-nowrap'>
              <div
                className='flex w-full h-1 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-200'
              >
                <div className='flex w-1 h-1 flex-col justify-center rounded-full overflow-hidden bg-orange-400 text-xs text-white text-center whitespace-nowrap'></div>
              </div>
            </div>
          </div>
        </div>
  
        <hr className='h-0.5 my-3 w-100 bg-gray-200' />
      </>
    );
  }
