import React from 'react'
import {
    Card,
    Button
} from 'react-bootstrap'

const card = props => (
    <Card style={{ width: '18rem' }} bsPrefix='card mx-auto'>
        <Card.Img variant="top" src={props.img}/>
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
            <p>Długość: {props.length} m</p>
            <p>Przepustowość: {props.capacity} os/h</p>
            <p>Temperatura: {props.temperature} °C</p>
            <p>Grubość śniegu: {props.depth} mm </p>
            </Card.Text>
            <Button variant="primary">KAMERA NA ŻYWO</Button>
        </Card.Body>
    </Card>
)

export default card;