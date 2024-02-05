import React from 'react'

export default function FileUploader() {
    return (
      <div className='flex items-center justify-center w-full'>
        <div className='flex flex-col items-center justify-center w-full pt-3 px-3 border border-gray-300 rounded-lg '>
          <label
            htmlFor='dropzone-file'
            className='flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer'
          >
            <div className='flex flex-col items-center justify-center pt-5 pb-6'>
              <svg
                className='h-8 w-8 my-2'
                fill='orange'
                viewBox='0 0 24 24'
                stroke='white'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                />
              </svg>
  
              <span className='font-secondary text-primary text-sm'>
                Drag <span className='font-sans font-extralight'>&amp;</span> Drop
                Here Or <span className='font-sans font-semibold'>Browse</span>
              </span>
            </div>
            <input id='dropzone-file' type='file' className='hidden' />
          </label>
          <button
            type='button'
            className='text-white bg-primary font-primary rounded my-3 px-12 py-1.5 text-sm'
          >
            Upload Manifest
          </button>
        </div>
      </div>
    );
  }
