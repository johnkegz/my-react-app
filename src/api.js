export const getPosts = () => {
    return fetch('http://localhost:3001/posts').then(res => res.json()).then(data => data)
}

export const postData = async (data) => {
    const response = await fetch('http://localhost:3001/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json' 
        },
        body: JSON.stringify(data)
    })

    return response
}
