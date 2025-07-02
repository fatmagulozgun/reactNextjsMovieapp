"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Movies = ({ dt }) => {
    const router = useRouter();

    return (
        <div onClick={() => router.push(`/movie/${dt?.id}`)} className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out group cursor-pointer">
            <Image style={{ objectFit: 'cover' }} fill src={`https://image.tmdb.org/t/p/original${dt?.backdrop_path || dt?.poster_path}`} alt={dt?.title || dt?.name || "Movie"} className="object-cover group-hover:brightness-75 transition-all duration-300"
            />

            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent px-4 py-3 flex flex-col justify-end opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-white text-xl font-bold drop-shadow-md truncate max-w-[280px]">
                    {dt?.title || dt?.name}
                </h2>
                <p className="text-sm text-gray-300">
                    {dt?.release_date || "Tarih Yok"} • ⭐ {dt?.vote_average || "0.0"}
                </p>
            </div>
        </div>
    );
};

export default Movies;
