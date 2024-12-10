import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchPostCommentsById } from '../../api/redditAPI';


export const fetchPostComments = createAsyncThunk(
    'comments/fetchPostComments',
    async (reqArgs) => {
        const {subreddit, postId} = reqArgs
        const response = await fetchPostCommentsById(subreddit, postId);
        // The value we return becomes the `fulfilled` action payload
        return response;
    }
);

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        postId: '',
        comments: {},
        error: false,
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostComments.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchPostComments.fulfilled, (state, action) => {
                state.loading = false;
                const comments = action.payload
                state.comments = {} // clear existing posts before replacing with new ones.
                comments.forEach((comment) => {
                    const {author, body, ups} = comment.data
                    state.comments[author] = {
                        author: author,
                        comment: body,
                        upvotes: ups
                    }
                })
            })
            .addCase(fetchPostComments.rejected, (state) => {
                state.loading = false
                state.error = true
                state.comments = {}
            })
    },
});

export const { } = commentsSlice.actions;
export const selectComments = (state) => state.comments.comments;


export default commentsSlice.reducer;