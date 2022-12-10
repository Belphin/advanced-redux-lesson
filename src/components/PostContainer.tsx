import React, { useEffect, useState } from "react";
import { postAPI } from "../srvices/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {
	const [limit, setLimit] = useState(10);
	const {
		data: posts,
		error,
		isLoading,
		refetch,
	} = postAPI.useFetchAllPostsQuery(limit);

	useEffect(() => {
		setTimeout(() => {
			setLimit(3);
		}, 2000);
	}, []);

	return (
		<div>
			<div>
				<button onClick={() => refetch()}>REFETCH</button>
				{isLoading && <h1>Loading...</h1>}
				{error && <h1>Loading error</h1>}
				{posts && posts.map((post) => <PostItem key={post.id} post={post} />)}
			</div>
		</div>
	);
};

export default PostContainer;
