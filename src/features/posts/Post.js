import React, { useEffect } from "react"
import { Link, useParams, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';


import { selectPostById } from '../posts/postsSlice'
import { fetchPostComments, selectComments } from "../comments/commentsSlice";

// PLAN - when user clicks on a post, this component will render, showing the post and comments
// ID is taken from route parameter

export function Post() {

    const dispatch = useDispatch();
    const { postId } = useParams()
    const post = useSelector(selectPostById(postId))

    useEffect(() => {
        const reqArgs = {subreddit: post.subreddit, postId: post.id}
        dispatch(fetchPostComments(reqArgs))
    },[])

    const comments = useSelector(selectComments)

    
    return (
        <div>
            {Object.values(comments).map((comment) => (
                <>
                    <p>{comment.author}</p>
                    <p>{comment.comment}</p>
                    <p>{comment.upvotes}</p>
                </>
            ))}
        </div>
    )
}