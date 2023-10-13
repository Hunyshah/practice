import React from "react";
import Link from "next/link";

const postsApi = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const Posts = async () => {
  const posts = await postsApi();
  return (
    <div>
      {posts.map((item: any) => {
        return (
          <div key={item.id}>
            <Link href={`posts/${item.id}`}>{item.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
