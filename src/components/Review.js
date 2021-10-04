import React from 'react';
import Card from 'react-bootstrap/Card';

function Review() {
    return (
        <div className="review-card card">
            <Card>
                <Card.Header>Review</Card.Header>
                    <Card.Body>
                    <Card.Title>Best FPS game released in 2021</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content. 
                        </Card.Text>
            
                     </Card.Body>
            </Card>
        </div>
    )

}

export default Review;