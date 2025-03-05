import React from 'react'
import CANCELIMG from "../../assets/cancel.gif"

const Cancel = () => {
  return (
    <div className='bg-slate-200 w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 m-2 rounded'>
          <img
            src={CANCELIMG}
            width={150}
            height={150}
            alt='success'
          />
          <p className='text-green-600 font-bold text-xl'>Payment Failed</p>
        </div>

  )
}

export default Cancel