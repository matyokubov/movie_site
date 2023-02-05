import { useLocation } from "react-router-dom";

export const setParams = (query, value) => {
    let currentURL = new URL(window.location.href)
    currentURL.searchParams.set(query, value)
    if(!value && value !== 0) currentURL.searchParams.delete(query)
    return currentURL.search
}

export const useGetParams = () => {
    const { search } = useLocation()
    return new URLSearchParams(search)
}