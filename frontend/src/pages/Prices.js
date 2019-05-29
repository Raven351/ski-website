import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Bottom from '../components/text-content/Bottom'
import PointPricesTable from '../components/tables/PointPrices'
import SubscriptionPricesTable from '../components/tables/SubscriptionPrices'

class SlopesPage extends Component{
    render(){
        return(
            <>
            <Container fluid >
                <Row>
                    <Col md="6">
                        <PointPricesTable/>
                    </Col>
                    <Col>
                        <SubscriptionPricesTable/>
                    </Col>
                </Row>
                <Row>
                  
                </Row>
            </Container>
            <Bottom/>
            </>
        )
    }
}

export default SlopesPage 
