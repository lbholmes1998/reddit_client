const axios = require('axios')

export async function fetchPostsBySubreddit(subreddit) {
    // Fetches posts from a given subreddit
    console.log(subreddit)
    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`)
    const json = await response.json()
    return json.data.children
}

export async function fetchSubreddits(){
    // Fetches 25 subreddits sorted by activity
    const response = await fetch("https://www.reddit.com/subreddits/popular.json")
    const json = await response.json()
    return json.data.children
}

export async function fetchPostCommentsById(subreddit, postId){
    // Fetches post data using a given ID
    const response = await fetch(`https://www.reddit.com/${subreddit}/comments/${postId}.json`)
    const json = await response.json()
    // console.log(json[1].data.children)
    return json[1].data.children
}