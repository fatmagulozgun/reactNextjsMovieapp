import React from "react";
import Movies from "./components/Movies";

const Page = async ({ searchParams }) => {
    const genre = searchParams?.genre || "";

    const url = `https://api.themoviedb.org/3/${genre ? `movie/${genre}` : "trending/all/day"}?language=en-US&page=1`;

    const res = await fetch(url, {
        next: { revalidate: 1000 },
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmE1NTdiNGZkYThkNzYzMWY2NWIzZDAyMGFhNjEwNyIsIm5iZiI6MTc1MTM3NTAzOS40NjcsInN1YiI6IjY4NjNkY2JmODY5MDM5ZGM2ZTQxNDcwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X92H_6ZK-8_VdE0voCNUFqBBMk7bMbflvb6GiYBeTog",
            accept: "application/json",
        },
    });

    const data = await res.json();

    let results = [];
    if (genre === "latest") {
        results = [data]; // tek bir film olduğu için array'e çeviriyoruz
    } else {
        results = data?.results || [];
    }

    return (
        <div className="flex flex-wrap gap-6 justify-center">
            {results.map((dt, i) => (
                <div key={i} className="w-[340px]">
                    <Movies dt={dt} />
                </div>
            ))}
        </div>
    );
};

export default Page;
