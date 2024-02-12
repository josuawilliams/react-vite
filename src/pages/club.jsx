import { useEffect, useState } from 'react'
import Cards from '../component/card'
import Navbar from '../component/navbar'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function ClubPage() {
  const [data, setData] = useState()

  const getDataClub = async () => {
    try {
      const res = await axios('https://api.p2.lc2s5.foxhub.space/myclubs', {
        method: 'GET',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      setData(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteClub = async (e) => {
    try {
      const res = await axios(
        `https://api.p2.lc2s5.foxhub.space/myclubs/${e}`,
        {
          method: 'DELETE',
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      )
      Swal.fire({
        title: 'Success',
        text: `${res.data.message}`,
        icon: 'success'
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDataClub()
  }, [data])

  return (
    <>
      <Navbar />
      <Cards data={data} type={'club'} onClick={(e) => deleteClub(e)} />
    </>
  )
}
