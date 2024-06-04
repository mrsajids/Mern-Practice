import Table from 'react-bootstrap/Table';
import React from 'react';
import { Container } from 'react-bootstrap';

function SmallExample() {
    let array = [
        { id: 1, fn: "Mark", ln: "Henry", un: 'dfjkdff' },
        { id: 2, fn: "Vark", ln: "Henry", un: 'dfjkdff' },
        { id: 3, fn: "Amit", ln: "Henry", un: 'dfjkdff' },
        { id: 4, fn: "Berry", ln: "Henry", un: 'dfjkdff' },
        { id: 5, fn: "John", ln: "Henry", un: 'dfjkdff' },

    ]
    let str = ['dad', 'rad', 'cad', 'merry', 'jerry']
    let no = [19, 34, 5,25, 23, 25]
    function onSort() {
        //sorting an array
        console.log(no.sort((a, b) => b - a));
    }
    return (
        <Container className='mt-5'>
            <Table bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th onClick={() => onSort()}>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        array.map((item, i) => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.fn}</td>
                                <td>{item.ln}</td>
                                <td>{item.un}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>

        </Container>
    );
}

export default SmallExample;