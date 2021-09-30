import React from 'react';
import Figure from 'react-bootstrap/Figure'

function Game() {
    return (
        <div>
            <Figure>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="https://i.imgur.com/lB3unIJ.jpg"
                />
                <Figure.Caption>
                    Apex Legends
                </Figure.Caption>
            </Figure>

        </div>

    );
}

export default Game;