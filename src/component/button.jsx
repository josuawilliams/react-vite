// eslint-disable-next-line react/prop-types
export default function Button({ title, onClick, className }) {
  return (
    <>
      <button
        onClick={onClick}
        className={`${
          className ? className : 'bg-blue-500 hover:bg-blue-700'
        } text-white font-bold py-2 px-4 rounded-full`}>
        <p className='px-3'> {title}</p>
      </button>
    </>
  )
}
