import React from "react";
import Link from "next/link";

const postsApi = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const Posts = async () => {
  const posts = await postsApi();
  return (
    <div className="h-full relative">
      <div className="flex flex-col fixed inset-y-0 bg-red-400 z-[80] w-52">
        <div>
          {posts.map((item: any) => {
            return (
              <div key={item.id}>
                <Link href={`posts/${item.id}`}>{item.name}</Link>
              </div>
            );
          })}
        </div>
      </div>
      <main className="ml-52">
        <h1>this is for main content</h1>
      </main>
    </div>
  );
};

export default Posts;
