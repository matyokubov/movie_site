export const useRequest = () => {
    const request = async ({me, meUrl, currUrl, path, method="GET", body, token, headers}) => {
        if (token) headers.Authorization = `Bearer ${localStorage.getItem(token)}`;
        const options = {
            method,
            headers: {...headers, "Content-Type": "application/json"},
            body: JSON.stringify(body)
        };
        return fetch(
            `${
                me ? meUrl : currUrl
            }${path}`,
            options
        ).then((res) => res.json())
        .catch(err => {
            return {err, ok: false}
        });
    };
    return request
}

export default useRequest;