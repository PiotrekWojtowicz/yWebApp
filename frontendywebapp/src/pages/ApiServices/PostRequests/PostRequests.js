import axios from "axios";
import React from "react";
import PostPreviewBuilder from "../../StorageSystem/PostPanel/Model/PostPreviewBuilder";
import UserBuilder from "../../StorageSystem/UserPanel/Model/UserBuilder";
import PostBuilder from "../../StorageSystem/PostPanel/Model/PostBuilder";

class PostRequests {

    static #instance = null;

    static getInstance() {
        if (!this.#instance) {
            this.#instance = new this();
        }
        return this.#instance;
    }

    constructor() {
    }

    sendPost = async (data) => {
        try {

            const response = await axios.post(`http://localhost:8080/api/v1/tokenmang/post`,
                data.post,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': data.token,
                    },
                });

            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    getAllPostPreview = async (data) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/public/post`);

            let postPreviewArray = []
            response.data.forEach(postData => {
                const postPreview = PostPreviewBuilder.Builder()
                    .setId(postData.id)
                    .setOwnerId(postData.ownerId)
                    .setOwnerName(postData.ownerName)
                    .setTitle(postData.title)
                    .setUpvote(postData.upvote)
                    .build();

                postPreviewArray.push(postPreview);
            });

            return postPreviewArray;
        } catch (error) {


            return false;
        }
    }

    getPostById = async (data) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/tokenmang/post/${data.postId}`, {
                headers: {
                    Authorization:data.token,
                },
            });
            let post = PostBuilder.Builder()
                .setId(response.data.id)
                .setOwnerId(response.data.ownerId)
                .setOwnerName(response.data.ownerName)
                .setTitle(response.data.title)
                .setContent(response.data.content)
                .setUpvote(response.data.upvote)
                .setReported(response.data.response)
                .setSystemCommentList(response.data.systemCommentList)
                .setUpvoteUserId(response.data.upvoteUserId)
                .build()

            return post;
        } catch (error) {


            return false;
        }
    }


}

export default PostRequests;
