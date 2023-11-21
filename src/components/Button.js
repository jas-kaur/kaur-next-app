import React from 'react'

const Button = ({ onClick, text, className }) => {
  return (
    <button onClick={onClick} className={`${className} bg-slate-600 text-white px-4 py-2 font-bold rounded-md`}>
        {text}
    </button>
  )
}

export default Button