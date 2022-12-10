import React from "react";
import { postAPI } from "../srvices/PostService";
import PostItem from "./PostItem";

const PostContainer2 = () => {
	const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(5);
	return (
		<div>
			<div>
				{isLoading && <h1>Loading...</h1>}
				{error && <h1>Loading error</h1>}
				{posts && posts.map((post) => <PostItem key={post.id} post={post} />)}
			</div>
		</div>
	);
};

export default PostContainer2;
