import React from 'react';
import {
    Jumbotron,
    Container,
    Row,
    Col
} from 'react-bootstrap'

const bottom = props =>(
    <Container fluid>    
            <Jumbotron bsPrefix="jumbotron bg-dark text-white text-center mt-1">
                <Row>
                    <Col bsPrefix="col m-lg-auto" md={6}>
                        <h4>Kontakt: </h4>
                        <p>Fajny Stok Sp. Z O.O.</p>
                        <p>Gubałówka 1</p>
                        <p>34-500 Zakopane, Polska</p>
                    </Col>
                    <Col bsPrefix="col m-lg-auto" md={6}>
                        <h4>Strona internetowa: </h4>
                        <p>Bartosz Baum</p>
                        <p>https://github.com/Raven351</p>
                    </Col>
                </Row>              
            </Jumbotron>
    </Container>

)

export default bottom;