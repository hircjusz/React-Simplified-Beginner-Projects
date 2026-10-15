
import { useState, useEffect } from "react"

export function useLocalStorage(key, initialValue){
    const [value,setValue] = useState(() => {
        const storedValue = localStorage.getItem(key)
        if (storedValue !== null) {
            try {
                return JSON.parse(storedValue)
            } catch {
                // Corrupted value (e.g. "undefined") - fall back to initialValue
                localStorage.removeItem(key)
            }
        }
        return typeof initialValue === "function" ? initialValue() : initialValue
    })

    useEffect(() => {
        if (value === undefined) {
            localStorage.removeItem(key)
        } else {
            localStorage.setItem(key, JSON.stringify(value))
        }
    }, [key, value])

    return [value, setValue]
}