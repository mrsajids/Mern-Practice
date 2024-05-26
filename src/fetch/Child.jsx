import React, { memo, useEffect, useState } from 'react'

const Child = ({ data2 }) => {
    const { loading, data, error } = data2
    
    
    console.log(data2)
    return (
        <>
            {loading && <h1>Loading...</h1>}
            {error && <h1>{error.message}</h1>}
            <h1 style={{textAlign:'center'}}>Table</h1>
            {
                 data != null && (
                    <table style={{ margin: "70px" }} >
                <thead style={{ backgroundColor: "lightblue", padding: "50px" }}>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       data.map((item,i) => (
                            <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td>{item.name}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
                 )
            }
            
        </>
    )
}

export default memo(Child)
