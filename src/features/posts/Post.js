import React from "react"
import { Link, useParams, Navigate } from "react-router-dom";

// PLAN - when user clicks on a post, this component will render, showing the post and comments
// ID is taken from route parameter

export function Post() {

    const {postId} = useParams()

    return (
        <div>
            <p className="my-2  font-bold tracking-tight text-black">ID: {postId} </p>
        </div>
    )
}