import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

function SmallExample() {
    const [data,setData]=useState([])
    let array = [
        { id: 1, fn: "Mark", ln: "Henry", un: 'dfjkdff' },
        { id: 2, fn: "Vark", ln: "Henry", un: 'dfjkdff' },
        { id: 3, fn: "Amit", ln: "Henry", un: 'dfjkdff' },
        { id: 4, fn: "Berry", ln: "Henry", un: 'dfjkdff' },
        { id: 5, fn: "amti", ln: "Henry", un: 'dfjkdff' },
    ]
    let str = ['dad', 'rad', 'cad', 'merry', 'jerry']
    let no = [19, 34, 5,25, 23, 25]
    function onSort() {
        //sorting an array
        // console.log([...no].sort((a, b) => b - a));
        // console.log(no);

        // sorting array strings
        setData([...array].sort((a, b) => {
            // for ascending order 
            if(a.fn.toLowerCase()>b.fn.toLowerCase()) return 1;
            if(b.fn.toLowerCase()>a.fn.toLowerCase()) return -1;
            return 0;
        }));

        // sorting array non english strings use localcompare
         
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
                        (data||array).map((item, i) => (
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