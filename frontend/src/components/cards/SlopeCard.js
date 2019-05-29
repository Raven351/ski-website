import React from 'react'
import {
    Card,
    Button,
    Modal,
    ResponsiveEmbed
} from 'react-bootstrap'

class card extends React.Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            modShow: false,
        };
    }

    render(){
        let modClose = () => this.setState({lgshow: false});

        return(
            <>
        <Card style={{ width: '18rem' }} bsPrefix='card mx-auto'>
            <Card.Img variant="top" src={this.props.img}/>
            <Card.Body>
                <Card.Title>{this.props.name}</Card.Title>
                <Card.Text>
                <p>Długość: {this.props.length} m</p>
                <p>Przepustowość: {this.props.capacity} os/h</p>
                <p>Temperatura: {this.props.temperature} °C</p>
                <p>Grubość śniegu: {this.props.depth} mm </p>
                </Card.Text>
                <Button variant="primary" onClick = {() => this.setState({modShow: true})}>KAMERA NA ŻYWO</Button>
            </Card.Body>
        </Card>

        <Modal
        size = "lg"
        show = {this.state.modShow}
        onHide = {modClose}
        >
        <Modal.Header closeButton onClick ={() => this.setState ({modShow: false})}>
            <Modal.Title>
                Kamera na żywo - {this.props.name}
            </Modal.Title>
        </Modal.Header> 
        <Modal.Body>
            <div style={{width: 'auto', height: 'auto'}}>
                <ResponsiveEmbed>
                    <embed src={this.props.cameraURL}/>
                </ResponsiveEmbed>
            {/* <iframe title = "cam" src="https://imageserver.webcamera.pl/umiesc/ufo" width="640" height="460" border="0" frameborder="0" scrolling="no"></iframe> */}
            </div>
        </Modal.Body>             
        </Modal>
        </>
        );
    }
}

export default card;