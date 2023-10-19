"use client";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import qs from "querystring";
const Catlog = () => {
  const router = useRouter();
  const urlparms = useSearchParams();
  const label = "label1";
  const buttonHandler = useCallback(() => {
    let currentquery = {};
    if (urlparms) {
      currentquery = qs.parse(urlparms.toString());
    }
    const updatedquery: any = {
      ...currentquery,
      catlog: label,
    };
    if (urlparms?.get("catlog") === label) {
      delete updatedquery?.catlog;
    }
    const url = qs.stringify({
      url: "/",
      query: updatedquery,
    });
    router.push(url);
  }, [label, urlparms, router]);

  return (
    <div>
      <button onClick={buttonHandler}>url link 1</button>
    </div>
  );
};

export default Catlog;
