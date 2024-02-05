import React from 'react'

import CloseButton from './components/layout/CloseButton';
import Divider from './components/layout/Divider';
import FileProgress from './components/FileProgress';
import FileUploader from './components/FileUploader';
import ImportDropdown from './components/ImportDropdown';
import TestingCenter from './components/TestingCenter';
import ToggleSwitch from './components/layout/ToggleSwitch';

function App() {
  return (
    <div className='flex-col p-7 bg-white rounded-2xl shadow-lg flex'>
      <CloseButton />
      <h1 className='document-title self-center text-center font-primary text-4xl text-primary'>
        Document Upload
      </h1>
      <div className='flex gap-12 px-10 m-10'>
        <div className='mt-2'>
          <ImportDropdown />
          <Divider />
          <span className='primary-text'>
            Select a manifest that you&apos;d like to import
          </span>
          <FileUploader />
          <FileProgress />
          <Divider />
          <span className='primary-text'>Elapse Data Checking:</span>
          <span className='success-text'>No Elapsed Dates!</span>
          <Divider />
          <span className='primary-text mb-2'>Tolerance Window:</span>
          <div className='flex items-center gap-x-2'>
            <ToggleSwitch />
            <div className='h-5 bg-primary w-[1px]'></div>
            <div className='inline-flex ml-1'>
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
              <span className='text-primary font-secondary ml-1'>
                Select Tolerance Level
              </span>
            </div>
          </div>
        </div>
        <div className='basis-1/4 w-[325px]'>
          <span className='primary-text mb-2'>
            Split schedule using social distancing?
          </span>

          <div className='flex items-center mb-4'>
            <input
              id='social-distancing'
              type='radio'
              value=''
              name='social-distancing'
              defaultChecked
            />
            <label htmlFor='social-distancing' className='ms-2 mr-4 info-text'>
              Yes
            </label>
            <input
              id='social-distancing'
              type='radio'
              value=''
              name='social-distancing'
              className=''
            />
            <label
              htmlFor='social-distancing'
              className='ms-2 mr-2 info-text'
            >
              No
            </label>
          </div>
          <Divider />
          <span className='primary-text'>Location Checking:</span>
          <span className='success-text'>All Available!</span>
          <Divider />
          <span className='primary-text mb-2'>Client:</span>
          <div className='flex items-center mb-4'>
            <input
              id='client'
              type='radio'
              value='single'
              name='client'
            />
            <label
              htmlFor='client'
              className='ms-2 mr-4 info-text'
            >
              Single
            </label>
            <input
              id='client'
              type='radio'
              value='multiple'
              name='client'
              defaultChecked
            />
            <label htmlFor='client' className='ms-2 info-text'>
              Multiple
            </label>
          </div>
          <div className='testing-center w-[325px]'>
            <TestingCenter centerNumber={1} />
            <TestingCenter centerNumber={2} />
            <TestingCenter centerNumber={3} />
            <TestingCenter centerNumber={4} />
          </div>
        </div>
      </div>
      <div className='footer mb-10'>
        <span className='flex justify-center font-primary text-primary text-xl'>
          Data in the import file is correct. Please press Continue to import.
        </span>
        <div className='flex justify-center space-x-8 center-items mt-3'>
          <button
            type='button'
            className='w-[240px] text-white bg-primary font-primary outline outline-primary rounded my-3 px-12 py-3'
          >
            Continue Import
          </button>
          <button
            type='button'
            className='w-[240px] text-secondary bg-white font-primary outline rounded my-3 px-12 py-3'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
