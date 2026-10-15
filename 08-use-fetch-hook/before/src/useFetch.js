
import { useState, useEffect } from "react"

export function useFetch(url, options ={}) {

    const [data, setData] = useState(null)
    const [status, setStatus] = useState("loading")
    const [error, setError] = useState(null)

    useEffect(() => {
        setStatus("loading")
        setError(null)
        fetch(url, options)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok")
                }
                return res.json()
            })
            .then((data) => {
                setData(data)
                setStatus("fetched")
            })
            .catch((error) => {
                setError(error)
                setStatus("error")
            })
    }, [url])

    return {data, status, error}
}