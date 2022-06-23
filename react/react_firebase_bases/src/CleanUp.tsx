import React, { useState, useEffect } from 'react'

export const CleanUp = () => {
  const [number, setNumber] = useState(0)

  const incrementNum = () => setNumber((pre) => pre + 1)

  useEffect(() => {
    console.log('clean up invoked')
    window.addEventListener('mousedown', () => {
      incrementNum()
      console.log('mousedown')
    })

    return () => {
      console.log('unmount cleanup')
      window.removeEventListener('mousedown', () => {
        incrementNum()
        console.log('mousedown')
      })
    }
  }, [])

  return <div>{number}</div>
}
