import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  const LogOut = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <>
      <nav className='fixed top-0 font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-stone-400 shadow sm:items-baseline w-full'>
        <div className='mb-2 sm:mb-0'>
          <Link to={'/'}>
            <a
              href=''
              className='text-2xl font-bold no-underline text-grey-darkest hover:text-yellow-300'>
              Home
            </a>
          </Link>
        </div>
        <div>
          <Link to={'/club'}>
            <a
              href=''
              className='text-lg font-bold mx-4 no-underline text-grey-darkest hover:text-yellow-300 ml-2'>
              Club
            </a>
          </Link>
          <a
            href=''
            onClick={LogOut}
            className='text-lg font-bold no-underline mx-4 text-grey-darkest hover:text-yellow-300 ml-2'>
            LogOut
          </a>
        </div>
      </nav>
    </>
  )
}

export default Navbar
