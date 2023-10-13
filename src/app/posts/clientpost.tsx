"use client";
import React from "react";

const Clientpost = ({ item }: any) => {
  return (
    <div>
      <button onClick={() => alert(item.title)}>{item.title}</button>
    </div>
  );
};

export default Clientpost;
