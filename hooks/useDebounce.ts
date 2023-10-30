import {useEffect, useState} from "react";

function useDebounce<T>(value: T, delay?: number): T {
    const [deboncedValue, setDeboncedValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDeboncedValue(value);
        }, delay || 500);

        return () => {
            clearTimeout(timer);
        }
    }, [value, delay]);

    return deboncedValue;
}

export default useDebounce;