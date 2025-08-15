import React from 'react'

export function Button({ className = '', size = 'md', ...props }) {
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-5 py-2.5 text-base'
  }
  return (
    <button
      className={`inline-flex items-center justify-center bg-slate-900 text-white rounded-xl shadow hover:opacity-90 transition ${sizes[size]} ${className}`}
      {...props}
    />
  )
}
