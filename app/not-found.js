import Link from 'next/link'


export default function NotFound() {

  return (
    <section className='w-full h-[80vh] '>
      <div className='flex flex-col justify-center items-center h-full bg-gray-200'>
        <h2 className='text-4xl'>Not Found</h2>
        <p className='text-2xl mt-4'>Could not find requested resource</p>
        <Link href="/" className='bg-red-700  px-7 py-2 text-white mt-7 rounded-full hover:bg-blue-600'>Home Page.</Link>

      </div>


    </section>
  )
}