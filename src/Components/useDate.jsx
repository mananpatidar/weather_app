// useDate.js
import { useEffect, useState } from "react";

export const useDate = (locale = 'en', hour12 = true) => {
    const [today, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}, ${today.getFullYear()}`;
    const time = today.toLocaleTimeString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12 });

    return {
        date,
        time
    };
};
