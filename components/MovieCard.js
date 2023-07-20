import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const MovieCard = ({ data }) => {

    const { id, type, title, synopsis } = data.jawSummary;
    return (
        <div className='mb-6 border border-red-500  rounded  '>
            <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                <Image className="min-w-full border" src={data.jawSummary.backgroundImage.url} alt="Sunset in the mountains"  width={250} height={250} />
                <div className="px-6 py-4 h-52 relative ">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base mb-4">{synopsis.substring(0, 60)}... </p>
                    <Link href={`/movies/${id}`} className='bg-red-700 text-xl px-5 py-2 text-white rounded-full  absolute bottom-3 '> Read more</Link>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
