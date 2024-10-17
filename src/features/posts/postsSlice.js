import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchPostsBySubreddit } from '../../api/redditAPI';


export const fetchSubPosts = createAsyncThunk(
    'posts/fetchSubPosts',
    async (subreddit) => {
        const response = await fetchPostsBySubreddit(subreddit);
        // The value we return becomes the `fulfilled` action payload
        return response;
    }
);

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        sub: 'Popular',
        posts: {},
        error: false,
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSubPosts.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchSubPosts.fulfilled, (state, action) => {
                state.loading = false;
                const posts = action.payload // array of objects keyed by a number
                state.posts = {} // clear existing posts before replacing with new ones.
                posts.map((post) => {
                    const {id, title, thumbnail, preview, author, ups, num_comments, subreddit_name_prefixed} = post.data
                    state.posts[id] = {
                        id: id,
                        title: title,
                        author: author,
                        preview: preview,
                        thumbnail: thumbnail,
                        upvotes: ups,
                        comments: num_comments,
                        subreddit: subreddit_name_prefixed
                    }
                })
            })
            .addCase(fetchSubPosts.rejected, (state) => {
                state.loading = false
                state.error = true
                state.posts = {}
            })
            .addCase('subreddits/addSelectedSub', (state, action) => {
                state.sub = action.payload
            })
    },
});

export const { } = postsSlice.actions;
export const selectPosts = (state) => state.posts.posts;
export const selectSubName = (state) => state.posts.sub;
export const selectLoading = (state) => state.posts.loading;


export default postsSlice.reducer;