import MovieCard from '@/components/MovieCard';
import React from 'react'

const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2c77d51150msh1377c85d90bb00dp17c177jsncbf7c69076c5',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};

const Movies = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await fetch(url, options);
  const data = await response.json();
  const datas = data.titles;
  // con




  return (
    <div className='container mx-auto '>
            <h1 className='text-4xl text-center mt-6'>Movies & Show </h1>
            <hr className='w-1/2 m-auto ' />

    <div className='columns-1  sm:columns-1 md:columns-2 lg:columns-3 xl:columns-4 my-12'>
    {
              datas.map((value,index,array)=>{
                return(
                  <> 
                  <div className=''>
                  <MovieCard key={value.id} data={value} />
                  </div>
                  </>
                )
              })
      }
    </div>
    </div>
  )
}

export default Movies
