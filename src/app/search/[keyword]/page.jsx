import Movies from '@/app/components/Movies';
import React from 'react';

const Page = async ({ params }) => {
    const API_KEY = "f2a557b4fda8d7631f65b3d020aa6107";
    const keyword = params.keyword;

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keyword}&language=en-US&include_adult=false`);
    const data = await res.json();

    return (
        <div>
            {data?.results?.length === 0 ? (
                <div>Aranılan şey bulunamadı!</div>
            ) : (
                data?.results?.map((dt, i) => (
                    <Movies key={i} dt={dt} />
                ))
            )}
        </div>
    );
}

export default Page;
