import React, { useState, useEffect } from "react";
import axios from "axios";
import Game from './Game';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Trending = () => {
    const [trendingGames, setGames] = useState([]);

    let url = process.env.REACT_APP_API + 'videogames/trending/';

    useEffect(() => {
        axios.get(url)
        .then(response => {
            setGames(response.data);
            console.log('INSIDE USE EFFECT', trendingGames);
        });
    }, []);

    console.log('STATE', trendingGames);

    
    return (
        <div className="trending">
            <Row className="mx-0">
                <Game as={Col}></Game>
            </Row>

        </div>
    )
}

export default Trending;