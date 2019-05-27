import React, {Component} from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import AboutUs from '../components/text-content/AboutUs'
import Bottom from '../components/text-content/Bottom'
import Carousel from '../components/picture-content/Carousel'

import './Home.css'

class HomePage extends Component{
    render(){
        return(
            <>
            <Image src = {require('./HomeBannerDark.jpg')} fluid = {"true"}/>
            <Container fluid>
                <Row>
                    <Col bsPrefix='col m-lg-auto'><AboutUs/></Col>
                    <Col lg={6} className="column"><Carousel/></Col>
                </Row>
                <Row>
                    <Bottom/>
                </Row>
            </Container>
            </>
        )
    }
}

export default HomePage