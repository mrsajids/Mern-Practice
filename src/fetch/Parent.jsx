import React, { useEffect, useState, useMemo } from 'react';
import Child from './Child';
import useFetch from './FetchData';

const Parent = () => {
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const data2 = useFetch("https://jsonplaceholder.typicode.com/users")

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // async function fetchData() {
    //     setLoading(true);
    //     setError(null);

    //     try {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //         const json = await response.json();
    //         setData(json);
    //     } catch (err) {
    //         console.error('Error fetching data:', err);
    //         setError(err);
    //     } finally {
    //         setLoading(false);
    //     }
    // }

    // const data2 = useMemo(() => ({
    //     data: data,
    //     loading: loading,
    //     error: error
    // }), [data, loading, error]);

    return (
        <div>
            <Child data2={data2} />
        </div>
    );
}

export default Parent;
