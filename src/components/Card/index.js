import React, { useState, useEffect } from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap';
import classes from './Card.module.scss'
import { motion, useMotionValue } from "framer-motion";

export default function CardComponent() {
    const x = useMotionValue(0)
    const [position, setPosition] = useState('')
    const timer = React.useRef();

    useEffect(() => {
        if (position !== '') {
            timer.current = window.setTimeout(() => {
                setPosition('')
            }, 3000);
        }
        return () => {
            clearTimeout(timer.current);
        }
    }, [position])

    return (
        <motion.div
            drag="x"
            className={classes.card}
            layout
            onDrag={(event, info) => event?.movementX > 0 ? setPosition('right') : setPosition('left')}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 50, }}
            style={{ x }}>
            {position === 'left' && <span className={classes.global}>GLOBAL</span>}
            {[1, 2, 3, 4, 5].map((cardItem, i) =>
                    <div key={i}>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12} className={'m-auto'}>
                                <Card >
                                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1533022139390-e31c488d69e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=60" />
                                    <Card.Body >

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
                    </div>)
            }
        </motion.div >)
}
