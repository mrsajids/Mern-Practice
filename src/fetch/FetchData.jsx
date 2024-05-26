import { useEffect, useMemo, useState } from 'react'

const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    useMemo(() => {
        fetchData()
    }, [url])

    // useEffect(()=>fetchData(),[url])

    function fetchData() {
        console.log('usefetch..');
        setState(
            {
                data: null,
                loading: true,
                error: null
            }
        )

        fetch(url)
            .then(response => response.json())
            .then(data => {
                // setData(json)
                setState(
                    {
                        data: data,
                        loading: false,
                        error: null
                    }
                )
            })
            .catch((err) => {
                setState(
                    {
                        data: null,
                        loading: false,
                        error: err
                    }
                )
            })
    }

    return state
}

export default useFetch
