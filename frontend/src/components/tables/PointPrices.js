import React from 'react'
import {
    Table
} from 'react-bootstrap'

const pointPrices = props =>(
    <Table striped bordered>
        <thead>
            <tr>
                <th>Ilość punktów: </th>
                <th>Cena: </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>35 punktów</td>
                <td>4 zł</td>
            </tr>
            <tr>
                <td>35 punktów</td>
                <td>4 zł</td>
            </tr>
            <tr>
                <td>35 punktów</td>
                <td>4 zł</td>
            </tr>
            <tr>
                <td>35 punktów</td>
                <td>4 zł</td>
            </tr>
            <tr>
                <td>35 punktów</td>
                <td>4 zł</td>
            </tr>
            <tr>
                <td>35 punktów</td>
                <td>4 zł</td>
            </tr>
        </tbody>
    </Table>
)

export default pointPrices;