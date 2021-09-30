import React, { useState, useEffect } from "react";
import axios from "axios";
import GameCard from "./GameCard";

const Trending = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        async function fetchGames() {
            const response = await axios.get('http://localhost:8000/videogames/trending')
            console.log(response)

            setGames(response.data.game)
            // axios.get(``)
            //     .then((res) => {
            //         setGames(res.data)
            //     })
        }
        fetchGames()
        console.log(games)
    }, [])
    
    return (
        <div>

        </div>
    )
}

export default Trending;