import axios from 'axios'
import { useEffect, useState } from 'react'
import Navbar from '../component/navbar'
import Cards from '../component/card'
import Swal from 'sweetalert2'

function DashboardPage() {
  const [data, setData] = useState()

  const getDataFunc = async () => {
    try {
      const res = await axios('https://api.p2.lc2s5.foxhub.space/clubs', {
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

  const addClub = async (e) => {
    try {
      const res = await axios(
        `https://api.p2.lc2s5.foxhub.space/myclubs/${e}`,
        {
          method: 'POST',
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      )
      Swal.fire({
        title: 'Success',
        text: `${res.status}`,
        icon: 'success'
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDataFunc()
  }, [])

  return (
    <>
      <Navbar />
      <Cards data={data} onClick={(e) => addClub(e)} />
    </>
  )
}

export default DashboardPage
