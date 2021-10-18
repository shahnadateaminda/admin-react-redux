import React from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap';
import classes from './Card.module.scss'

export default function CardComponent() {
    return (
        <>
            {[1, 2, 3, 4, 5].map((cardItem,i) =>
                <div className={classes.card} key={i}>
                    <Row>
                        <Col xs={12} sm={12} md={10} lg={10} className={'m-auto'}>
                            <Card >
                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1533022139390-e31c488d69e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=60" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>)}
        </>
    )
}
