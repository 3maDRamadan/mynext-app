async function PostDetails({ postId }) {
  // const postId = params.postId;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const post = await response.json();

  return (
    <div>
      <div
        style={{
          width: "100%",
          backgroundColor: "white",
          padding: "10px ",
          borderRadius: "10px",
          marginTop: "20px",
          color: "black",
        }}
      >
        <h1>{post.title}</h1>
        <hr />
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export default PostDetails;
