import { useState, useEffect } from 'react'
import axios from 'axios'
import { NavBar } from './NavBar'

export const Concurrent = () => {
  const [photos, setPhotos] = useState([])
  const [searchKey, setSearchKey] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios('https://jsonplaceholder.typicode.com/photos')
      setPhotos(res.data)
    }
    fetchData()
  }, [])
  const filteredPhotos = photos.filter((photo) => {
    return photo.title.includes(searchKey)
  })
  const updateHandler = (e) => {
    setSearchKey(e.target.value)
  }
  return (
    <div className="flex flex-col items-center font-mono text-gray-600">
      <NavBar />
      <p className={`my-3 text-xl font-bold ${'text-blue-500'}`}>
        startTransition (concurrent feature)
      </p>
      <input
        type="text"
        className="mb-5 rounded border border-gray-300 px-3 py-1 text-xs"
        value={searchKey}
        onChange={updateHandler}
      />
      {filteredPhotos.map((photo) => (
        <p className="mb-2 text-xs" key={photo.id}>
          {photo.title}
        </p>
      ))}
    </div>
  )
}
