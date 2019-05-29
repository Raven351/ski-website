import React from 'react'
import {
    Table
} from 'react-bootstrap'

const subscribtionPrices = props =>(
    <Table striped bordered>
        <thead>
            <tr>
                <th>Okres ważności przepustki czasowej: </th>
                <th>Cena: </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>5 godzin</td>
                <td>20zł</td>
            </tr>
            <tr>
                <td>5 godzin</td>
                <td>20zł</td>
            </tr>
            <tr>
                <td>5 godzin</td>
                <td>20zł</td>
            </tr>
            <tr>
                <td>5 godzin</td>
                <td>20zł</td>
            </tr>
            <tr>
                <td>5 godzin</td>
                <td>20zł</td>
            </tr>
            <tr>
                <td>5 godzin</td>
                <td>20zł</td>
            </tr>
        </tbody>
    </Table>
)

export default subscribtionPrices;