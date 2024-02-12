/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import Button from './button'

// eslint-disable-next-line react/prop-types
export default function Cards({ data, onClick, type }) {
  return (
    <>
      <div className='mt-24 mb-10 mx-6 justify-center items-center grid grid-cols-4 gap-4'>
        {data?.length == 0 ? (
          <div className='flex absolute align-middle justify-center w-full'>
            <p className='font-bold text-2xl'>Data Club Tidak Ada</p>
          </div>
        ) : (
          data?.map((el) => {
            return (
              <>
                <div className='max-w-sm rounded overflow-hidden shadow-lg'>
                  <img
                    className='w-full h-60'
                    src={type === 'club' ? el.Club.imageUrl : el.imageUrl}
                    alt='Club'
                  />
                  <div className='px-6 py-4'>
                    <div className='font-bold text-xl mb-2'>
                      {type === 'club' ? el.Club.title : el.title}
                    </div>
                    {type === 'club' ? (
                      <>
                        <Link to={`/update/${el.Club.id}/${el.id}`}>
                          <Button
                            className={'bg-blue-500 hover:bg-blue-700 mx-2'}
                            title={'Update'}
                          />
                        </Link>
                        <Button
                          className={'bg-slate-600'}
                          title={'Leave'}
                          onClick={() => onClick(el.id)}
                        />
                      </>
                    ) : (
                      <Button title={'Join'} onClick={() => onClick(el.id)} />
                    )}
                  </div>
                </div>
              </>
            )
          })
        )}
      </div>
    </>
  )
}
