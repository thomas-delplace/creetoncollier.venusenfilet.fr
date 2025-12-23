const apiRoute = (route) => {

    const api = { url: import.meta.env.VITE_API_URL, port: import.meta.env.VITE_API_PORT }
    // const url = `${api.url}:${api.port}${route}`
    const url = `${api.url}:${api.port}${route}`

    console.log('API URL : ', url)

    return url
}
export default apiRoute