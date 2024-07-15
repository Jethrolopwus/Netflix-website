// import { fetchTrending } from "@actions/movieData"
// import HeroCard from "./HeroCard"


// const Hero = async () => {

//     const trending = await fetchTrending()

//     const randomNumber = Math.floor(Math.random()*trending.length)

//     const trendingMovie = trending[randomNumber];



//   return (
//     <div>
//         <HeroCard trendingMovie ={trendingMovie}/>
//     </div>
//   )
// }

// export default Hero


"use client"
import React, { useEffect, useState } from 'react';
import HeroCard from './HeroCard';
import { fetchTrending } from '@actions/movieData'
import { Movie } from '@lib/type.db';


const Hero: React.FC = () => {
    const [trendingMovie, setTrendingMovie] = useState<Movie | null>(null);

    useEffect(() => {
        const getTrendingMovie = async () => {
            const trending = await fetchTrending();
            const randomNumber = Math.floor(Math.random() * trending.length);
            const movie = trending[randomNumber];
            setTrendingMovie(movie);
        };

        getTrendingMovie();
    }, []);

    if (!trendingMovie) {
        return <div>Loading...</div>;
    }
    

    return (
        <div>
            <HeroCard trendingMovie={trendingMovie} />
        </div>
    );
};

export default Hero;
