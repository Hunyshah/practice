import React from "react";
const postsApi = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};
const UserPAge = async (props: any) => {
  const posts = await postsApi();
  const currentid = props.params.userid;
  const data = posts[currentid - 1];
  return (
    <div>
      <h1>{data.id}</h1>
      <h2>{data.name}</h2>
      {data.website}
    </div>
  );
};

export default UserPAge;

export async function generateStaticParams() {
  const posts = await postsApi();
  return posts.map((item: any) => ({
    userid: item.id.toString(),
  }));
}
