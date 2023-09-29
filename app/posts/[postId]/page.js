import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";

async function PostDetailsPage({ params }) {
  const postId = params.postId;

  const LoadingJSX = (
    <div>
      <h1>Loading...</h1>
    </div>
  )
  return (
    <div style={{ padding: "40px" }}>
      <h1>Post Details</h1>
      <Suspense fallback={LoadingJSX}>
        <PostDetails postId={postId} />
      </Suspense>
    </div>
  );
}

export default PostDetailsPage;
