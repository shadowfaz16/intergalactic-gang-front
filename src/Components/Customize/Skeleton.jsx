import React from 'react'

const Skeleton = () => {
  return (
        <div
            className='flex shadow-lg p-5 m-5 rounded-xl bg-white animate-pulse border-2'
        >
            <div
                className='bg-gray-300 rounded-lg w-14 h-14'
            ></div>
            <div
                className='grid grid-cols-6 grow'
            >
                <div
                    className='col-span-4 flex justify-center items-center'
                >
                    <div
                        className="w-28 h-7 bg-gray-300 rounded-md"
                    ></div>
                </div>
                <div
                    className='flex items-center'
                >
                    <div
                        className="w-10 h-7 bg-gray-300 rounded-md"
                    ></div>
                </div>
                <div
                    className='flex items-center'
                >
                    <div
                        className="w-16 h-7 bg-gray-300 rounded-md"
                    ></div>
                </div>
            </div>
        </div>
  )
}

export default Skeleton