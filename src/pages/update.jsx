import { useParams } from 'react-router-dom'
import Navbar from '../component/navbar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '../component/button'
// import Swal from 'sweetalert2'

export default function EditClubPage() {
  const [dataClub, setClubData] = useState()
  const { id, myId } = useParams()

  const handleChange = (e) => {
    setClubData({
      ...dataClub,
      [e.target.name]: e.target.value
    })
  }

  const getDataUpdate = async () => {
    try {
      const res = await axios(
        `https://api.p2.lc2s5.foxhub.space/clubs/${id}/${myId}`,
        {
          method: 'GET',
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      )
      setClubData(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getDataUpdate()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const Data = {
      imageUrl: dataClub.imageUrl,
      title: dataClub.title,
      description: dataClub.description
    }
    try {
      const res = await axios.put(
        `https://api.p2.lc2s5.foxhub.space/clubs/${id}`,
        Data,
        {
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      )
      console.log(res)
      // Swal.fire({
      //   title: 'Success',
      //   text: `${res.status}`,
      //   icon: 'success'
      // })
    } catch (error) {
      console.log(error)
    }
  }
  console.log(dataClub)

  return (
    <>
      <Navbar />
      <main className='flex mt-32 min-h-screen flex-col items-center justify-between p-6 lg:p-24'>
        <form
          onSubmit={handleSubmit}
          className='bg-white w-full max-w-3xl mx-auto px-4 lg:px-6 py-8 shadow-md rounded-md flex flex-col lg:flex-row'>
          <div className='w-full lg:w-1/2 lg:pr-8 lg:border-r-2 lg:border-slate-300'>
            <div className='mb-4'>
              <label className='text-neutral-800 font-bold text-sm mb-2 block'>
                Title
              </label>
              <input
                id='title'
                name='title'
                type='text'
                // onclick='hideBackCard()'
                onChange={handleChange}
                className='flex h-10 w-full rounded-md border-2 bg-background px-4 py-1.5 text-lg ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined'
                value={dataClub?.title}
              />
            </div>

            <div className='mb-4'>
              <label className='text-neutral-800 font-bold text-sm mb-2 block'>
                Description
              </label>
              <input
                id='description'
                name='description'
                type='text'
                // onclick='hideBackCard()'
                className='flex h-10 w-full rounded-md border-2 bg-background px-4 py-1.5 text-lg ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined'
                onChange={handleChange}
                value={dataClub?.description}
              />
            </div>
            <div className='mb-4'>
              <label className='text-neutral-800 font-bold text-sm mb-2 block'>
                ImageUrl
              </label>
              <input
                id='ImageUrl'
                name='ImageUrl'
                type='text'
                onChange={handleChange}
                // onclick='hideBackCard()'
                className='flex h-10 w-full rounded-md border-2 bg-background px-4 py-1.5 text-lg ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined'
                value={dataClub?.imageUrl}
              />
              <Button
                className={'mt-4 bg-blue-500 hover:bg-blue-700'}
                title={'Submit'}
              />
            </div>
          </div>
          <div className='w-full lg:w-1/2 lg:pl-8'>
            <div className='w-full ml-4 h-28'>
              <div className='transition-transform duration-500'>
                <img src={dataClub?.imageUrl} />
              </div>
            </div>
          </div>
        </form>
      </main>
    </>
  )
}
