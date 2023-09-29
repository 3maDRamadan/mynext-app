import Link from "next/link";

async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 120,
    },
  });
  const posts = await response.json();

  const postsJSX = posts.map((post) => {
    return (
      <Link
        href={`/posts/${post.id}`}
        style={{
          width: "70%",
        }}
      >
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
          <p>{post.body}</p>
        </div>
      </Link>
    );
  });

  return (
    <div>
      <h1>Posts Page</h1>
      {/* posts */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {postsJSX}
      </div>
      {/* posts */}
      {/* <h2>{todo.title}</h2> */}
    </div>
  );
}

export default PostsPage;
