const axios = require('axios')

export async function fetchPopularPosts() {
    const response = await fetch('https://www.reddit.com/r/popular.json')
    const json = await response.json()
    // console.log(json.data.children)
    return json.data.children
}

export async function fetchDummyJson() {
    const response = await fetch('https://dummyjson.com/products/1')
    const json = await response.json()
    return json
}