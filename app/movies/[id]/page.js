import Image from 'next/image';
import React from 'react'


const MovieId = async ({ params }) => {
    const id = params.id;
    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2c77d51150msh1377c85d90bb00dp17c177jsncbf7c69076c5',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
    const data = await response.json();
    const main_data = data[0].details;


    return (
        < div className='m-6   '>
            <h1 className='text-4xl text-center mb-5'>NetFlix\ <span className='text-red-700'>{main_data.type} </span> </h1>
            <div className="  md:columns-2">
                <Image className="" src={main_data.backgroundImage.url} alt="Sunset in the mountains" width={600} height={700} />
                <div className="px-6 py-4 h-full flex flex-col justify-start items-center">
                    <h1 className="font-bold text-4xl mb-2">{main_data.title}</h1>
                    <p className="text-gray-700 text-2xl mb-4">{main_data.synopsis} </p>

                </div>
            </div>
        </div>
    )
}

export default MovieId

