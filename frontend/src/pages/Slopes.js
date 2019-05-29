import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import SlopeCard from '../components/cards/SlopeCard'
import Bottom from '../components/text-content/Bottom'

import zwyrtlikImg from '../img/zwyrtlik_diamond.png'
import ufoImg from '../img/ufo_diamond.png'
import skalkaImg from '../img/skalka_diamond.png'
import turniaImg from '../img/turnia_diamond.png'


class SlopesPage extends Component{
    render(){
        return(
            <Container fluid>
                <Row>
                    <Col bsPrefix='col mt-lg-5 mx-auto'>
                        <SlopeCard name={'Zwyrtlik'} img={zwyrtlikImg}
                        length={'400'} capacity={'700'} temperature = {'4'} depth = {'4'}
                        cameraURL = {'https://imageserver.webcamera.pl/umiesc/zwyrtlik'}/>
                    </Col>
                    <Col bsPrefix='col mt-lg-5 mx-auto'>
                        <SlopeCard name={'Ufo'} img={ufoImg}
                        length={'400'} capacity={'700'} temperature = {'4'} depth = {'4'}
                        cameraURL = {'https://imageserver.webcamera.pl/umiesc/ufo'}/>
                    </Col>
                    <Col bsPrefix='col mt-lg-5 mx-auto'>
                        <SlopeCard name={'Turnia'} img={turniaImg}
                        length={'500'} capacity={'1500'} temperature = {'4'} depth = {'4'}
                        cameraURL = {'https://imageserver.webcamera.pl/umiesc/turnia'}/>
                    </Col>
                    <Col bsPrefix='col mt-lg-5 mx-auto'>
                        <SlopeCard name={'Skałka'} img={skalkaImg}
                        length={'300'} capacity={'600'} temperature = {'4'} depth = {'4'}
                        />
                    </Col>
                </Row>
                <Row>
                    <Bottom/>
                </Row>
            </Container>
        )
    }
}

export default SlopesPage