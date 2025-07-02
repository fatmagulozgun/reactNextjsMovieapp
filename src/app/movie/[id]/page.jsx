import Image from 'next/image';
import React from 'react'

const API_KEY = "f2a557b4fda8d7631f65b3d020aa6107";

const getMovie = async (id) => {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    if (!res.ok) throw new Error("Movie not found");
    return await res.json();
};

const Page = async ({ params }) => {
    const id = params.id;
    const movieDetail = await getMovie(id)
    console.log(movieDetail, "movieDetail")
    return (
        <div className='relative p-7 min-h-screen'>
            <Image
                style={{ objectFit: 'cover' }}
                fill
                src={`https://image.tmdb.org/t/p/original${movieDetail?.backdrop_path || movieDetail?.poster_path}`}
                alt={movieDetail?.title || movieDetail?.name || "Movie"}
                className="object-cover group-hover:brightness-75 transition-all duration-300"
            />
        
            <div className='absolute top-0 left-0 w-full p-7 text-white bg-black bg-opacity-40'>
                <div className='text-4xl font-bold'>{movieDetail?.title}</div>
                <div className='w-1/2'>{movieDetail?.overview}</div>
                <div className='my-3'>{movieDetail?.release_date} - {movieDetail?.vote_average}</div>
                <div className='my-2 border w-32 p-2 hover:bg-white hover:text-black rounded-md text-center text-lg cursor-pointer'>Trail</div>
            </div>
        </div>
    )
}

export default Page;
