import React from 'react';
import Figure from 'react-bootstrap/Figure'

function Game() {
    return (
        <div className = "game">
            <Figure>
                <Figure.Image
                    width={200}
                    height={300}
                    alt="150x300"
                    src="https://i.imgur.com/WNnaeum.jpg"
                />
                <Figure.Caption>
                    Apex Legends
                </Figure.Caption>
            </Figure>

        </div>

    );
}

export default Game;