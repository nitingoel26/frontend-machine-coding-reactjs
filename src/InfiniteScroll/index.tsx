import React, { useEffect, useState } from "react";
import Post from "./post.component";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    async function fetchPics() {
      try {
        const resp = await fetch(
          `https://picsum.photos/v2/list?page=${pageNo}&limit=3`
        );
        const data = await resp.json();
        setData((prev) => [...prev, ...data]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPics();
  }, [pageNo]);
  return <Post data={data} setPage={setPageNo} />;
};

export default InfiniteScroll;
