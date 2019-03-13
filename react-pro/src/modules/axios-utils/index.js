import Get from "./Get"
import Post from "./Post"

import {Component} from "react"

Component.prototype.$post = Post;
Component.prototype.$get = Get;

export {
    Get,
    Post
}
