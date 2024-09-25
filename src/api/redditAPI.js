const axios = require('axios')

export async function fetchPostsBySubreddit(subreddit) {
    // Fetches posts from a given subreddit
    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`)
    const json = await response.json()
    console.log(json.data.children)
    return json.data.children
}